import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getLastSent, getLastReceived } from '../actions'

let UserProfile = React.createClass({
  render: function() {
    return (<div>Hello</div>)
  }
})

UserProfile.propTypes = {

}

UserProfile.connect(
  {}
)(UserProfile)

module.exports = UserProfile
