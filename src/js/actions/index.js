import {get} from 'superagent'


const _updatePossibleLocations = (locations) => {
  return {
    type: 'UPDATE_POSSIBLE_LOCATIONS',
    possibleLocations: locations
  }
}

const _setMatchingLocations = (matching) => {
  return  {
    type: 'SET_MATCHING_LOCATIONS',
    filtered: matching
  }
}


const _updateSearchString = (str) => {
  return  {
    type:'UPDATE_SEARCHSTRING',
    searchString: str
  }
}


const _passPhoto = (id) =>{
  return {
    type:'PASS_PHOTO',
    id
  }
}

const _fleekPhoto = (id) =>{
  return {
    type:'FLEEK_PHOTO',
    id
  }
}

const _newPhoto = (url) => {
  return {
    type:'ADD_NEW_FEED',
    feed:{id:Date.now(),link:url}
  }
}

const _addFleekPhoto = (photo) => {
  return {
    type: 'ADD_FLEEK_PHOTO',
    photo: photo
  }
}

const getTrendingPhotos = () => {
  return dispatch => {
    get('/getTrending')
      .end((err, res) => {
        var trendingPhotos = JSON.parse(res.text)
        dispatch(receiveTrendingPhotos(trendingPhotos))
      })

  }

}

const receiveTrendingPhotos = (trendingPhotos) => {
  return {
    type: 'RECEIVE_TRENDING_PHOTOS',
    photos: trendingPhotos
  }
}

const loadCategories = (categories) => {
  return {
    type: 'LOAD_CATEGORIES',
    categories: categories
  }
}

const getCategories = () => {
  return dispatch => {
    get('/getCategories')
      .end((err, res) => {
        var categories = JSON.parse(res.text)
        dispatch(loadCategories(categories))
      })
  }
}

const getFeed = () => {
  return dispatch => {
    get('/getFeed')
      .end((err, res) => {
        var feed = JSON.parse(res.text)
        dispatch(loadFeed(feed))
      })
  }
}

const loadFeed = (feed) => {
  return {
    type: 'LOAD_FEED',
    feed: feed
  }
}

const getUserInfo = () => {
  return dispatch => {
    get('/users/loggedIn')
      .end((err, res) => {
        var user = JSON.parse(res.text)
        dispatch(loadUserInfo(user))
      })
  }
}

const loadUserInfo = (user) => {
  return {
    type: 'USER_LOGIN',
    user: user
  }
}

const getAllLocations = () => {
  return dispatch => {
    get('/allLocations')
      .end((err, res) => {
        var locations = JSON.parse(res.text)
        dispatch(loadAllLocations(locations.countries))
      })
  }
}

const loadAllLocations = (countries) => {
  return {
    type: 'LOAD_COUNTRIES',
    allCountries: countries
  }
}

const getPossibleLocations = () => {
  return dispatch => {
    get('/locations')
      .end((err, res) => {
        var locations = JSON.parse(res.text)
        dispatch(_updatePossibleLocations(locations.countries))
      })
  }
}

export {
  _passPhoto,
  _fleekPhoto,
  _updatePossibleLocations,
  _setMatchingLocations,
  _updateSearchString,
  _newPhoto,
  _addFleekPhoto,
  getTrendingPhotos,
  getCategories,
  getFeed,
  getUserInfo,
  getAllLocations,
  getPossibleLocations
}
