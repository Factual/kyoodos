import React, { Component } from 'react';
import { render } from 'react-dom'

let Body = React.createClass({
  render: function() {
    return (
      <div
        className='kyoodos__body'>
        <div className="row medium-unstack kyoodos__cards__wrapper">
          <div className="columns">One</div>
          <div className="columns">Two</div>
          <div className="columns">Three</div>
          <div className="columns">Four</div>
          <div className="columns">Five</div>
          <div className="columns">Six</div>
        </div>
      </div>
    )
  }
});

module.exports = Body;
