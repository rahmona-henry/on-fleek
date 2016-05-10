import React,{Component} from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
          <div class="settings-btn" onClick={this.changeDisplay.bind(this)}>Grid</div>
        </div>
        <div class={this.state.toggleGridVisibility? 'feed-container grid' : 'feed-container'}>
          <ReactCSSTransitionGroup transitionName="butter" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {content}
          </ReactCSSTransitionGroup>
        </div>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    feeds : state.feeds
  }
}

// export for test
export {FeedContainer}

export default connect(
  mapStateToProps
)(FeedContainer)
