import React, { PropTypes } from 'react';
import Kyoodo from './Kyoodo';
import { fetchKyoodos, fetchUsers } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    kyoodos: state.kyoodos,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKyoodos: (cb) => {
      dispatch(fetchKyoodos(cb))
    },
    fetchUsers: (user_id, cb) => {
      dispatch(fetchUsers(user_id, cb))
    }
  }
}


let Kyoodos = React.createClass({
  componentWillMount: function() {
    this.props.fetchKyoodos((data) => {
      console.log('111', data)
    })
  },
  parse: function(kyoodo) {
    var res = {},
        users = {},
        matches = kyoodo.content.match(/<@.{9}>/g) || [],
        receiverIds = matches.map(function (m) {
          return m.match(/<@(.{9})>/)[1];
        }),
        userIds = receiverIds.concat([kyoodo.from_user_id]);
    return userIds
  },
  render: function() {
    let kyoodos = []
    if (this.props.kyoodos) {
      this.props.kyoodos.forEach((k) => {
        let to_users = this.parse(k),
            receivers = {}

        let user_ids = to_users.join(',') + ',' + k.from_user_id
        debugger
        this.props.fetchUsers(user_ids, (data) => {
          console.log(2222222222, data)
          kyoodos.push(<Kyoodos key={ k.id }
                       from_user = { from_user }
                       content = { k.content } />)
          })

      })

      return (
        <div
          className='row medium-unstack kyoodos'>
          { kyoodos }
        </div>
      )
    } else {
      return (<div className='kyoodos'>No kyoodos found :( </div>)
    }
  }

})

Kyoodos.propTypes = {
  kyoodos: React.PropTypes.array
}

Kyoodos = connect(
    mapStateToProps,
    mapDispatchToProps
)(Kyoodos)

module.exports = Kyoodos
