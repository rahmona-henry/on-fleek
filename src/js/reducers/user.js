
const initUser={id:0,name:'visitor',photos:[], votedPhotos: [],currentFollows:[], loggedIn: false, styleRating: 0, connoisseurRating: 0}

export default (state=initUser,action) =>{
  switch (action.type) {
    case 'USER_LOGIN':
      if (action.user.loggedIn){
        return Object.assign({},state,action.user)
      } else {
        return state
      }
    case 'ADD_NEW_FEED':
      let nextState= Object.assign({},state)
      nextState.photos.push(action.feed)
      return nextState
      break;
    case 'ADD_FLEEK_PHOTO': {
      return Object.assign({}, state, {votedPhotos: state.votedPhotos.concat([action.photo])})
    }
    case 'LOAD_FOLLOWED_PHOTOS':
      return Object.assign({},state,{currentFollows:action.feeds.currentFollows})
      break;
    default:
      return state

  }
}
