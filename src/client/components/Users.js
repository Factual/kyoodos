import React, { PropTypes } from 'react';
import User from './User'
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
      users.push(<User key={ uID } data= { this.props.users[uID] } />)
    })

    return (
      <div className='row medium-unstack'>
        { users }
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
