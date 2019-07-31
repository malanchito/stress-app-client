import React from 'react'
import {loadJobs} from '../actions/jobs'
import {connect} from 'react-redux'
import Jobs from './Jobs';

class JobsContainer extends React.Component {

    state = { 
      currentJob: 'Sports Referee',
    }
  componentDidMount() {
    this.props.loadJobs(this.state.currentList)
  }

  componentDidUpdate() {
    
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ currentJob: event.target.value })
  }

  render() {
    if(!this.props.jobs){
      return "Loading jobs"
    }
    return <Jobs 
    jobs={this.props.jobs}
    onSubmit={this.onSubmit}
    jobSelected={this.state.currentJob}
    />
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs
})

export default connect(mapStateToProps,{ loadJobs })(JobsContainer)