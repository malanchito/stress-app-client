import request from 'superagent'

export const JOBS_FETCHED = 'JOBS_FETCHED'

const baseUrl = 'http://localhost:4000/api'

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

