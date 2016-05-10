const initialFeed = []

export default function (state=initialFeed, action){
  switch (action.type) {
    case 'LOAD_FEED':
      return action.feed
    case 'PASS_PHOTO':
      return state.filter((o) => o.id !== Number(action.id))
    case 'FLEEK_PHOTO':
      return state.filter((o) => o.id !== Number(action.id))
    default:
      return state
  }
}
