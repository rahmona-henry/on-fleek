import React,{Component} from 'react'
import { connect }       from 'react-redux'
import _                 from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as actions from '../../actions'
import {postVotes,postFollow,postUnfollow}  from '../../reducers'

import Swipeable from 'react-swipeable'

export default class ImagePage extends Component{
  nextPhoto(history){
    history.replace('/vote')
  }

  handleRight(id) {
    document.querySelector('.single-view').classList.add('slide-right')
    document.querySelector('.page').classList.add('flames')

    let timerID = window.setTimeout(() => {
      this.likePhoto(id)
    }, 200)
  }

  handleLeft(id) {
    document.querySelector('.single-view').classList.add('slide-left')
    document.querySelector('.page').classList.add('icy')
    let timerID = window.setTimeout(() => {
      this.dislikePhoto(id)
    }, 200)
  }

  likePhoto(id){
    document.querySelector('.single-view').classList.remove('slide-right')
    document.querySelector('.page').classList.remove('flames')
    window.clearTimeout("timerID")
    let {fleekPhoto,history,feeds,user,addFleekPhoto} = this.props
    if(user.name === 'visitor'){
      history.push('/')
      return false ;
    }

    const photo = _.find(feeds, (feed) => feed.id === Number(id))
    addFleekPhoto(photo)
    fleekPhoto(id)
    this.handleVote(feeds,id,history,1)
  }

  dislikePhoto(id){
    document.querySelector('.single-view').classList.remove('slide-left')
    document.querySelector('.page').classList.remove('icy')
    window.clearTimeout("timerID")
    let {passPhoto,history,feeds,user} = this.props
    if(user.name === 'visitor'){
      history.push('/')
      return ;
    }
    passPhoto(id)
    // bring a new feed to show
    this.handleVote(feeds,id,history,0)
  }
  handleVote(feeds, id,history,vote){
    postVotes({photoId : id, vote : vote})
    this.nextPhoto(history)
    this.props.updateVotes()

  }
  followOwner(photoOwner){
    let {history,user} = this.props
    if(user.name === 'visitor'){
      history.push('/')
      return ;
    }
    // darken color of this button, and post to server
    this.props.postFollowToServer(photoOwner)
  }
  unfollowOwner(photoOwner){
    let {history,user} = this.props
    if(user.name === 'visitor'){
      history.push('/')
      return ;
    }
    this.props.postUnfollowToServer(photoOwner)
  }
  report(id){
    //report inappropriate photo
    // vote -1 means report a inappropriate photo
    let {history, feeds} = this.props
    this.handleVote(feeds,id,history,-1)
  }
  addToFavorites(id){
    //add photo to favorites for future viewing
    let {history,feeds,user} = this.props
    if(user.name === 'visitor'){
      history.push('/')
      return ;
    }
    this.handleVote(feeds,id,history,100)
  }
  swipeRight(id){
    let {history,feeds} = this.props
    let currentIndex = _.findIndex(feeds,['id',Number(id)])
    if(feeds[currentIndex+1]){
      history.push('/photo/'+feeds[currentIndex+1].id)
    }else{
      history.push('/photo/'+feeds[0].id)
    }
  }
  swipeLeft(id){
    let {history,feeds} = this.props
    let currentIndex = _.findIndex(feeds,['id',Number(id)])
    if(feeds[currentIndex-1]){
      history.push('/photo/'+feeds[currentIndex-1].id)
    }else{
      history.push('/photo/'+feeds[feeds.length-1].id)
    }
  }
 render(){
   let {id}= this.props.params
   let {feeds,user} = this.props
   let feed = _.find(feeds,['id',Number(id)]);
   if(!feed){
     return(<h1>Loading</h1>)
   }
   const photoId = id
   let voteArray = user.votedPhotos.map(photo => photo.photoId)
   const votedmatch = voteArray.indexOf(Number(photoId))>=0
   // true voted,false didnt vote
   let toggleFollow = user.currentFollows.indexOf(feed.userId)<0?
    <button className="btn" onClick={this.followOwner.bind(this,feed.userId)}>follow.</button> :
    <button className="btn" onClick={this.unfollowOwner.bind(this,feed.userId)}>unfollow.</button>
   return (
      <div className="single-view" ref="container">
        <div className="user-bar">
          <div className="left-arrow arrow" onClick={this.swipeRight.bind(this,photoId)}><img src="../images/arrow.png" /></div>
          {!votedmatch? <p>Swipe right for awesome, swipe left if you're just not feeling it.</p> :
                      <p>You have voted this photo</p>}
          <div className="right-arrow arrow" onClick={this.swipeLeft.bind(this,photoId)}><img src="../images/arrow.png" /></div>
        </div>
        <Swipeable className="single-photo-wrapper"
                 onSwipedRight={!votedmatch? this.handleRight.bind(this, photoId) : this.swipeRight.bind(this,photoId)}
                 onSwipedLeft={!votedmatch? this.handleLeft.bind(this, photoId) : this.swipeLeft.bind(this,photoId)}
                //  onSwipedDown={this.report.bind(this, photoId)}
                //  onSwipedUp={this.addToFavorites.bind(this, photoId)}
                 preventDefaultTouchmoveEvent={false}
                 >
          <img src={feed.link} />
        </Swipeable>
        <div className="single-controls">
          {votedmatch? '' : [<button className="btn pass" key='1' onClick={this.dislikePhoto.bind(this,id)}>meh.</button>,
        <button className="btn fleek" key='2' onClick={this.likePhoto.bind(this,id)}>fleek!</button>]}
          { Number(user.id)!== Number(feed.userId)?
            toggleFollow :
          ' ' }
        </div>
     </div>
   )
 }
}


const mapStateToProps = (state) => {
  return {
    feeds: state.trending,
    user: state.user
  }
}

const mapDispatcherToProps =(dispatch) => {
  return {
    fleekPhoto: (id) =>{
      dispatch(actions._fleekPhoto(id))
    },
    passPhoto: (id) =>{
      dispatch(actions._passPhoto(id))
    },
    addFleekPhoto: (photo) => {
      dispatch(actions._addFleekPhoto(photo))
    },
    postFollowToServer: (photoOwner) => {
      postFollow({photoOwner},dispatch)
    },
    postUnfollowToServer: (photoOwner) => {
      postUnfollow({photoOwner},dispatch)
    },
    updateVotes: ()=>{
      dispatch(actions.getUserInfo())
    }
  }
}

// export for test
export {ImagePage}

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(ImagePage)
