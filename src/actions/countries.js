import request from 'superagent'

export const COUNTRIES_FETCHED = 'COUNTRIES_FETCHED'

const baseUrl = 'http://localhost:4000/api'

const countriesFetched = countries => ({
  type: COUNTRIES_FETCHED,
  countries
})

export const loadCountries = (choice) => (dispatch) => {
    
  request(`${baseUrl}/countries/${choice}`)
    .then(response => {
      dispatch(countriesFetched({ countries: response.body })
      )
    })
    .catch(console.error)
}

