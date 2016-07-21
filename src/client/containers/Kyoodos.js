import React, { PropTypes } from 'react';
import Kyoodo from '../components/Kyoodo';
import { getKyoodosAndUsers } from '../actions'
import { connect } from 'react-redux'
import { getUsersFromKyoodo } from '../utils'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

let SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
}

let Kyoodos = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  componentWillMount: function() {
    this.props.getKyoodosAndUsers();
  },
  componentDidMount: function() {
    this.setInterval(this.props.getKyoodosAndUsers, 10000)
  },
  render: function() {
    let data = this.props.data
    if (data && data.kyoodos.length > 0 && Object.keys(data.users).length > 0) {
      let kyoodos = []
      data.kyoodos.forEach((k) => {
        let users = getUsersFromKyoodo(k)
        let to_users = users.filter(function(u) { return u != k.from_user_id })

        let receivers = to_users.map((curr) => {
          return data.users[curr]
        })
        kyoodos.push(<Kyoodo key = { k.id }
                             from_user = { data.users[k.from_user_id] || 'unknown' }
                             receivers = { receivers }
                             users = { data.users }
                             content = { k.content } />)
      })
      return (
        <div className='row medium-unstack kyoodos'>
          { kyoodos }
        </div>
      )
    } else {
      return (<div className='kyoodos'>...</div>)
    }
  }
})

Kyoodos.propTypes = {
  kyoodos: React.PropTypes.object
}

Kyoodos = connect(
    mapStateToProps,
    { getKyoodosAndUsers }
)(Kyoodos)

module.exports = Kyoodos
