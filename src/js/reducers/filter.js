import _ from 'lodash'

let initialState = {
  possibleLocations: [],
  searchString: "",
  filtered: []
}


export default function (state=initialState, action){
  switch (action.type) {
    case 'FILTER_FEED_LOCATION':{
      // action.possibleLocations
      return Object.assign({}, state, action.possibleLocations)
    }

    case 'UPDATE_POSSIBLE_LOCATIONS': {
      return Object.assign({}, _.set(state, 'possibleLocations', action.possibleLocations))
    }

    case 'SET_MATCHING_LOCATIONS': {
      console.log('something')
      return Object.assign({}, _.set(state, 'filtered', action.filtered))
    }

    case 'UPDATE_SEARCHSTRING': {
      return Object.assign({}, _.set(state, 'searchString', action.searchString))
    }

    case 'CHANGE_SEARCH_STRING':{
      return state
    }
    default:
      return state
  }
}
