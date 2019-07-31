const reducer = (state = null, action = {}) => {
    switch(action.type){
      case 'JOBS_FETCHED':
          return action.jobs
      default:
        return state
    }
  }
export default reducer