const reducer = (state = null, action = {}) => {
    switch(action.type){
      case 'COUNTRIES_FETCHED':
          return action.countries
      default:
        return state
    }
  }
export default reducer