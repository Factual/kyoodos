import React, { PropTypes } from 'react'
import Kyoodo from '../components/Kyoodo';
import { connect } from 'react-redux'
import { getFromKyoodos, getToKyoodos, getLastSent, getLastReceived } from '../actions'
import { getUsersFromKyoodo } from '../utils'

let UserProfile = React.createClass({
  componentWillMount: function() {
    console.log('will');
    this.props.getFromKyoodos(this.props.params.userId);
    this.props.getToKyoodos(this.props.params.userId);
  },
  render: function() {

    if (this.props.from || this.props.to) {
      let kyoodos = {
            from: [],
            to: []
      };

      // for both to and from kyoodos ...

      Object.keys(kyoodos).forEach((key, i) => {
        (this.props[key]).forEach((k) => {
          let users = getUsersFromKyoodo(k)
          let to_users = users.filter((u) => { return u != k.from_user_id })
          let receivers = to_users.map((curr) => {
            return this.props.users[curr] || {}
          })
          kyoodos[key].push(
            <Kyoodo key = { k.id + i }
                    from_user = { this.props.users[k.from_user_id] || 'unknown' }
                    receivers = { receivers }
                    users = { this.props.users }
                    content = { k.content } />
          )
        })
      })

      return (
        <div className='row medium-unstack kyoodos'>
          <div className='medium-6 columns'>
            <h3>kyoodos sent</h3>
              { kyoodos.from }
            </div>
          <div className='medium-6 columns'>
            <h3>kyoodos received</h3>
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
