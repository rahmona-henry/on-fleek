import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Searching extends Component{
  componentWillMount() {
    this.setState({
      searchString: this.props.searchString
    })
  }

  autofill(payload) {
    // console.log(payload.location)
    this.props.changeSearchValue(payload.location)
  }

  render(){
    return (
       <div className="searching">
         <ul className="possible-locations">
          <ReactCSSTransitionGroup transitionName="info-box" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
           {true? this.props.possibleLocations.filter((location) => {
             let term = location.name.substring(0, this.props.searchString.length)
             return (term.toUpperCase() === this.props.searchString.toUpperCase())
           }).map((location, i) => <li className="location-box" onClick={this.autofill.bind(this, {location})} key={i}>{location.name}</li>) : ''}
          </ReactCSSTransitionGroup>
         </ul>
       </div>
     )
   }
}
