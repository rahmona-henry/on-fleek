import React,{Component} from 'react'
import {connect}         from 'react-redux'
import OnFleek from './profile/OnFleek'
import Uploads from './profile/Uploads'
import Voted from './profile/Voted'
import User from './profile/User'
import _ from 'lodash'

class Profile extends Component{
  constructor(props){
    super(props)
  }

  fleekestImage(){
    var photos = this.props.user.votedPhotos
    var fleekestImageIndex = 0
    photos.map(function(photo, i){
      if (photo.rating > photos[fleekestImageIndex].rating) {
        fleekestImageIndex = i
      }
    })
    return photos[fleekestImageIndex]
  }


  render(){
    var { photos, name, votedPhotos } = this.props.user
    var fleekestPhoto = votedPhotos.length === 0 ? <h3>FleekSome Photos</h3> : <Voted photo={this.fleekestImage()}/>
    return (
      <div className='profileContainer'>
          <div className='feed'>
            <User user={this.props.user}/>
            <OnFleek photos={photos.slice(0,4)}/>
            {fleekestPhoto}
            <Uploads photos={photos}/>
          </div>
      </div>
   )
 }
}

const mapStateToProps = (state) =>{
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(Profile)
