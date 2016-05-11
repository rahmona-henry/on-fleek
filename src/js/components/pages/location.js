//import utils
import _ from 'lodash'
import request from 'superagent'
//import modules
import React,{Component} from 'react'
import { connect } from 'react-redux'
// components
import Feed  from '../feed'
import Searching from '../searching'

import DrawerMenu from '../drawerMenu'

//actions
import { _updatePossibleLocations, _setMatchingLocations, _updateSearchString } from '../../actions/index'

class Location extends Component{

  matchCountryNameToCode(name, id){
    let found = _.find(this.props.filter.possibleLocations, ['name', name])
    if (found) {
      return found.id
    }
    return -1
  }

  handleInputChange(e) {
    let countryCode = this.matchCountryNameToCode(e.target.value)
    this.updateState(countryCode, e.target.value)
  }

  handleSelection(value) {
    this.updateState(value.id, value.name)
  }

  updateState(searchedID, currentSearchString = this.props.filter.searchString) {
    let matchingLocations = this.props.trending.filter(possible => (possible.countryId === searchedID))
    this.props.dispatch(_setMatchingLocations(matchingLocations))
    this.props.dispatch(_updateSearchString(currentSearchString))
  }


  generateContentOrSearch = () => {
    //maybe refactor into an if rather than a ternary since it already looks rather dense
    return this.props.filter.filtered.length > 0 ? this.props.filter.filtered.map( cell => <Feed key={cell.id} {...cell}/>)
    : <Searching changeSearchValue={this.handleSelection.bind(this)} searchString={this.props.filter.searchString} possibleLocations={this.props.filter.possibleLocations} />
  }

  selectField(e){
    e.target.select()
  }


  render(){
    let content = this.generateContentOrSearch()
    return (
      <div>
        <div class="settings-bar-location">
          <input
            value={this.props.filter.searchString}
            onChange={this.handleInputChange.bind(this)}
            type="search"
            placeholder="Search..."
            className="searchbar"
            onFocus={this.selectField.bind(this)}
            />
        </div>
        <div className="feed-container">
            {content}
          </div>
      </div>
    )
  }
}

export default connect(state => state)(Location)
export {
  Location
}
