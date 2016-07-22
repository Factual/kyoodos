import React, { PropTypes } from 'react';
import User from '../components/User'
import { getUsersAndLastReceivedKyoodo } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
      users: state.data.users
    }
}

let Users = React.createClass({
  componentWillMount: function() {
    this.props.getUsersAndLastReceivedKyoodo()
  },
  render: function() {
    let users = []
    Object.keys(this.props.users).forEach((uID) => {
      users.push(
        <User key={ uID } data= { this.props.users[uID] } />
      )
    })

    return (
      <div>
        <div className='row medium-unstack kyoodos'>
          { users }
        </div>
      </div>
    )
  }
})

Users.propTypes = {
  users: React.PropTypes.object
}

Users = connect(
  mapStateToProps,
  { getUsersAndLastReceivedKyoodo } 
)(Users)

module.exports = Users
