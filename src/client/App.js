import 'babel-polyfill' // Do this once before any other code in your app
import React, { Component } from 'react';
import ReactDom, { render, findDOMNode } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Header from  './components/Header'
import Kyoodos from './containers/Kyoodos'
import Users from './containers/Users'

const App = React.createClass({
  render() {
    return (
      <div className='kyoodos__wrapper'>
        <Header />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
})

const About = React.createClass({
  render() {
    return ( <div>ABOUT</div> )
  }
})

const Explore = React.createClass({
  render() {
    return ( <div>Explore</div> )
  }
})

const store = configureStore()
ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/explore" component={Explore}/>
        <Route path="/users" component={Users} />
        <IndexRoute component={Kyoodos} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
