
const initCategories=[]

export default (state=initCategories,action) =>{
  switch (action.type) {
    case 'LOAD_CATEGORIES':
      return action.categories
      break;
    default:
      return state

  }
}
