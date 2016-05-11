const initialState = []

export default function (state=initialState, action){
  switch (action.type) {
    case 'LOAD_COUNTRIES':
    console.log('HERE countries', action)
      return action.allCountries
    default:
      return state
  }
}
