import React, { PropTypes } from 'react';
import Kyoodos from './Kyoodos';

let Body = React.createClass({
  render: function() {
    // TEMP - FAKE DATA
    let avatar = "https://secure.gravatar.com/avatar/941911ea65854962a81c678f464897c1.jpg$1s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0026-512.png"
    let kyoodos = [
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'},
      {to: {first_name: 'yoda', avatar: avatar}, from: {first_name: 'luke', avatar: avatar }, message: 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.!'}
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
