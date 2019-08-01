import request from 'superagent'

export const JOBS_FETCHED = 'JOBS_FETCHED'

const baseUrl = 'https://stress-server.herokuapp.com/api'

const jobsFetched = jobs => ({
  type: JOBS_FETCHED,
  jobs
})

export const loadJobs = () => (dispatch) => {
    
  request(`${baseUrl}/jobs`)
    .then(response => {
      dispatch(jobsFetched({ jobs: response.body })
      )
    })
    .catch(console.error)
}

