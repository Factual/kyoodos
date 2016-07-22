import React, { PropTypes } from 'react'
import Kyoodo from '../components/Kyoodo';
import { connect } from 'react-redux'
import { getFromKyoodos, getToKyoodos, getLastSent, getLastReceived } from '../actions'
import { getUsersFromKyoodo } from '../utils'

let UserProfile = React.createClass({
  componentWillMount: function() {
    this.props.getFromKyoodos(this.props.params.userId);
    this.props.getToKyoodos(this.props.params.userId);
  },
  render: function() {
    let data = this.props.data
    console.log(data)
    if (data && data.from && data.to && (data.from.length > 0 || data.to.length > 0)) {
      let kyoodos = {
        from: [],
        to: []
      }

      Object.keys(kyoodos).forEach(function (key) {
        data[key].forEach(function(k) {
          let users = getUsersFromKyoodo(k)
          let to_users = users.filter(function(u) { return u != k.from_user_id })
          let receivers = to_users.map((curr) => {
            return data.users[curr] || {}
          })
          kyoodos[key].push(
            <Kyoodo key = { k.id }
                    from_user = { data.users[k.from_user_id] || 'unknown' }
                    receivers = { receivers }
                    users = { data.users }
                    content = { k.content } />
          )
        });
      });

      return (
        <div>
          <h3>FROM</h3>
          <div className='row medium-unstack kyoodos'>
            { kyoodos.from }
          </div>
          <h3>TO</h3>
          <div className='row medium-unstack kyoodos'>
            { kyoodos.to }
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

UserProfile = connect(
  (state, props) => {
    return {
      data: {
        users: state.data.users,
        from: state.data.kyoodosFrom || [],
        to: state.data.kyoodosTo || [],
        userId: props.params.userId
      }
    }
  },
  { getFromKyoodos, getToKyoodos }
)(UserProfile)

module.exports = UserProfile
