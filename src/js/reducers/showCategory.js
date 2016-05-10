let initState = false

export default (state=initState, action) =>{
  switch (action.type) {
    case 'TOGGLE_SHOWCATEGORY_STATUS':
      return action.value
      break;
    default:
      return state
  }
}
