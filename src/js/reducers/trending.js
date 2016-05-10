const initialState = []

export default function (state=initialState, action){
  switch (action.type) {
    case 'RECEIVE_TRENDING_PHOTOS':
      return action.photos
    default:
      return state
  }
}
