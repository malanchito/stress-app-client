import React from 'react'
import {loadCountries} from '../actions/countries'
import {connect} from 'react-redux'
import CountriesList from './CountriesList';

class CountriesContainer extends React.Component {

    state = { 
      currentList: 'mostSmoking',
      previousList: 'mostSmoking'
    }
  componentDidMount() {
    this.props.loadCountries(this.state.currentList)
  }

  componentDidUpdate() {
    if(this.state.previousList!==this.state.currentList){
      this.setState({previousList: this.state.currentList})
      this.props.loadCountries(this.state.currentList)
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ currentList: event.target.value })
  }

  render() {
    if(!this.props.countries){
      return "Loading countries"
    }
    return <CountriesList 
    countries={this.props.countries}
    onSubmit={this.onSubmit}
    choice={this.state.currentList}
    />
  }
}

const mapStateToProps = state => ({
  countries: state.countries
})

export default connect(mapStateToProps,{ loadCountries })(CountriesContainer)