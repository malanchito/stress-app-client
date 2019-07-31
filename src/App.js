import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import CountriesContainer from './components/CountriesContainer';
import JobsContainer from './components/JobsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={JobsContainer} />
          <Route path="/countries" component={CountriesContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;