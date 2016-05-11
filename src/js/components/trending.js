//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// components
import Feed  from './feed'
//actions

class Trending extends Component {
  constructor() {
    super()
    this.state = {
      content: true
    }
  }
  change() {
    this.setState({content: "ho"})
  }
  render(){
    return (
      <div className="feed-container">
        {this.state.content? <div>
            <div className="message-box" onClick={()=>{this.setState({content:false})}}>
              <p>Certified fleekness. Only the best bits, curated here for your pleasure.</p>
            </div>
          </div> : ' '}
            { this.props.trending.map((feed) => {
              return <Feed key={feed.id} {...feed}/>
            })}
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    trending: state.trending
  }
}

export default connect(mapStateToProps) (Trending)
export {
 Trending
}
