import React, { PropTypes } from 'react';
import Kyoodos from './Kyoodos';

let Body = React.createClass({
  render: function() {
    // TEMP - FAKE DATA
    let kyoodos = [
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'},
      {to: {name: 'yoda'}, from: {name: 'luke'}, message: 'great job!'}
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
