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

class Categories extends Component{
  constructor(props){
    super(props)
    this.state = {
      feeds: [],
      showCategories: true
    }
  }

  findImagesByCategory(id){
    let feeds = this.props.feeds.filter((feed) => {
      if (feed.categoryId == Number(id)) {
        return feed
      }
    })
    this.setState({
      feeds,
      showCategories: false
    })
    console.log('i see it',this.state)
  }

  render(){
    let categoryNames = !this.state.showCategories ? '' : this.props.categories.map((category, i) => {
      return <li className="location-box" key={i}
        onClick={this.findImagesByCategory.bind(this, category.id)}>
        {category.category}
      </li>
    })

    return (
      <div className="searching">
        <div className="feed-container">
          <ul className="possible-locations">
            {categoryNames}
          </ul>
          {this.state.feeds.map((feed) => {
            return <Feed key={feed.id} {...feed} />
          })}
        </div>
      </div>
    )
  }
}

export default connect(state => state) (Categories)

// For testing
export {
 Categories
}
