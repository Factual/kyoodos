import React, { PropTypes } from 'react'
import Kyoodo from '../components/Kyoodo';
import { connect } from 'react-redux'
import { getFromKyoodos, getToKyoodos, getLastSent, getLastReceived } from '../actions'
import { getUsersFromKyoodo } from '../utils'

let UserProfile = React.createClass({
  getInitialState: function() {
    return {
      data_from: [],
      data_to: []
    }
  },
  componentWillMount: function() {
    this.props.getFromKyoodos(this.props.params.userId);
    this.props.getToKyoodos(this.props.params.userId);
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({ data_from: [...this.state.data_from, ...newProps.from] })
    this.setState({ data_to: [...this.state.data_to, ...newProps.to] })
  },
  render: function() {

    if (this.state.data_from || this.state.data_to) {
      let from = [],
          to = [];

      let users, to_users, receivers;

      // for both to and from kyoodos ...
      this.state.data_from.forEach((k, i) => {
        users = getUsersFromKyoodo(k)
        to_users = users.filter((u) => { return u != k.from_user_id })
        receivers = to_users.map((curr) => {
          return this.props.users[curr] || {}
        })

        from.push(
          <Kyoodo key={ 'from' + k.id + i + 'from' }
                  from_user = { this.props.users[k.from_user_id] || 'unknown' }
                  receivers = { receivers }
                  users = { this.props.users }
                  content = { k.content } />
        )
      })

      this.state.data_to.forEach((k, i) => {
        users = getUsersFromKyoodo(k)
        to_users = users.filter((u) => { return u != k.from_user_id })
        receivers = to_users.map((curr) => {
          return this.props.users[curr] || {}
        })
        to.push(
          <Kyoodo key={ 'to' + k.id + i + 'to' }
                  from_user = { this.props.users[k.from_user_id] || 'unknown' }
                  receivers = { receivers }
                  users = { this.props.users }
                  content = { k.content } />
        )
      })

      return (
        <div className='row medium-unstack kyoodos'>
          <div className='medium-6 columns'>
            <h3>kyoodos sent</h3>
            { from }
          </div>
          <div className='medium-6 columns'>
            <h3>kyoodos received</h3>
            { to }
          </div>
        </div>
      )
    } else {
      return (<div><img src='/images/loading.gif' /></div>)
    }
  }
})

UserProfile.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    users: state.data.users,
    from: state.data.kyoodosFrom,
    to: state.data.kyoodosTo
  }
}

UserProfile = connect(
  mapStateToProps,
  { getFromKyoodos, getToKyoodos }
)(UserProfile)

module.exports = UserProfile
