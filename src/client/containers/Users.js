import React, { PropTypes } from 'react';
import UserAvatar from '../components/UserAvatar'
import { getAllUsers } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
      users: state.data.users
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers())
    }
  }
}

let Users = React.createClass({
  componentWillMount: function() {
    this.props.getAllUsers()
  },
  render: function() {
    let users = []
    Object.keys(this.props.users).forEach((uID) => {
      users.push(
        <UserAvatar key={ uID } data= { this.props.users[uID] } />
      )
    })

    return (
      <div>
        <div className='row'>
          <h3>Users</h3>
        </div>
        <div className='row medium-unstack'>
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
  mapDispatchToProps
)(Users)

module.exports = Users
