import React,{Component}          from 'react'
import { connect }                from 'react-redux'
import ReactCSSTransitionGroup    from 'react-addons-css-transition-group'
// components
import Feed  from '.././feed'

class FeedContainer extends Component{
 constructor(){
   super()
   this.state={
     toggleGridVisibility:false
   }
 }
 changeDisplay(){
   this.setState({toggleGridVisibility:!this.state.toggleGridVisibility})
 }
 render(){
   const { feeds } = this.props
   let content = feeds.length>0 ? feeds.map(feed => <Feed key={feed.id} {...feed}/>)
   : <h1 key='nophoto'>No Photos to Show</h1> ;
   return (
     <div>
        <div class="settings-bar">
          {this.props.user.name === 'visitor'? '' : <a href='users/logout'>log out</a> }
          <div class="settings-btn" onClick={this.changeDisplay.bind(this)}><img src="images/gridyellow.svg" /></div>
        </div>
        <div class={this.state.toggleGridVisibility? 'feed-container grid' : 'feed-container'}>
          {content}
        </div>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    feeds : state.feeds,
    user : state.user
  }
}

// export for test
export {FeedContainer}

export default connect(
  mapStateToProps
)(FeedContainer)
