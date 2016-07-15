import React, { Component } from 'react';
import ReactDom, { render, findDOMNode } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Header from  './components/Header'
import Kyoodos from './components/Kyoodos'

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

const Users = React.createClass({
  render() {
    return ( <div>HELLO</div> )
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


ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/explore" component={Explore}/>
      <Route path="/users" component={Users} />
      <IndexRoute component={Kyoodos} />
    </Route>
  </Router>
), document.getElementById('root'))
