let initState = []

export default (state=initState, action) =>{
  switch (action.type) {
    case 'LOAD_FOLLOWED_PHOTOS':
      return action.feeds.followPhots
      break;
    default:
      return state
  }
}
