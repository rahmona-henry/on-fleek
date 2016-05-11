//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
// components
import Feed  from './feed'
import Searching from './searching'
import DrawerMenu from './drawerMenu'
//actions

class FriendFeed extends Component{



  render(){
    const content = this.props.following.map((feed) => {
      return <Feed key={feed.id} {...feed} />
    }) || <h1>try follwoing people</h1>
    return (
      <div>
        <div className="feed-container grid">
          <div class="message-box">
            <p>Here are all the stylish trendsetters that you have chosen to follow. Let their inspirational glow, rain down upon your perfect hair.</p>
          </div>
            {content}
        </div>
      </div>
    )
  }
}

export default connect(state => state) (FriendFeed)
export {
 FriendFeed
}
