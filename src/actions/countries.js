import request from 'superagent'

export const COUNTRIES_FETCHED = 'COUNTRIES_FETCHED'

const baseUrl = 'https://stress-server.herokuapp.com/api'

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

