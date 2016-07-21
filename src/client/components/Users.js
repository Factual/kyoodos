import React, { PropTypes } from 'react';
import { getUsers } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
      users: state.data.users
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

let Users = React.createClass({
  render: function() {
    if (this.props.users) {
      let users = []
      return (
        <div className='row medium-unstack'>
          { users }
        </div>
      )
    } else {
      return (<div className='users'>...</div>)
    }
  }
})

Users.propTypes = {
  users: React.PropTypes.object
}

Users = connect(
  mapStateToProps
)(Users)

module.exports = Users
