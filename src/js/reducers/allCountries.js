const initialState = []

export default function (state=initialState, action){
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      return action.allCountries
    default:
      return state
  }
}
