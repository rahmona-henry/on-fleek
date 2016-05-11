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
    this.props.dispatch({type:'TOGGLE_SHOWCATEGORY_STATUS',value:false})
    let feeds = this.props.trending.filter((feed) => {
      if (feed.categoryId == Number(id)) {
        return feed
      }
    })
    this.setState({
      feeds,
      showCategories: false
    })
  }

  render(){
    let categoryNames = this.props.showCategory ? this.props.categories.map((category, i) => {
      return <li className="location-box" key={i}
        onClick={this.findImagesByCategory.bind(this, category.id)}>
        {category.category}
      </li>
    }) : ''
    let content = categoryNames? <ul className="possible-locations">{categoryNames}</ul>
        : ''
    return (
      <div className="searching">
          {content}
        <div className="feed-container grid">
          {this.props.showCategory ? '' : this.state.feeds.map((feed) => {
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
