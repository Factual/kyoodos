import React, { Component } from 'react';
import ReactDom, { render, findDOMNode } from 'react-dom'
import Header from  './Header';
import Body from  './Body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
