import React, { PropTypes } from 'react';
import Kyoodos from './Kyoodos';

let Body = React.createClass({
  render: function() {
    // TEMP - FAKE DATA
    let kyoodos = [
      {to: 'yoda', from: 'luke', message: 'great job!'},
      {to: 'yoda', from: 'luke', message: 'great job!'},
      {to: 'yoda', from: 'luke', message: 'great job!'},
      {to: 'yoda', from: 'luke', message: 'great job!'},
      {to: 'yoda', from: 'luke', message: 'great job!'},
      {to: 'yoda', from: 'luke', message: 'great job!'}
    ]

    return (
      <div
        className='kyoodos__body'>
        <Kyoodos kyoodos={ kyoodos }/>
      </div>
    )
  }
});

module.exports = Body;
