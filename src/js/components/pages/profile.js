import React,{Component} from 'react'
import {connect}         from 'react-redux'
import OnFleek from './profile/OnFleek'
import Uploads from './profile/Uploads'
import Voted from './profile/Voted'
import User from './profile/User'
import _ from 'lodash'

class Profile extends Component{




  render(){
    var { photos, name, votedPhotos } = this.props.user
    return (
      <div className='profileContainer'>
          <div className='feed'>
            <User user={this.props.user}/>
            <OnFleek photos={photos.slice(0,4)}/>
            <Voted photos={votedPhotos}/>
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
