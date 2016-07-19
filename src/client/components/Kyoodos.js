import React, { PropTypes } from 'react';
import Kyoodo from './Kyoodo';
import { fetchKyoodos, fetchUsers, fetchCachedUsers } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    kyoodos: state.kyoodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadKyoodos: () => {
      dispatch(fetchKyoodos())
    },
    fetchUsers: (user_ids, cb) => {
      dispatch(fetchUsers(user_ids))
    },
    getAllUsers: (user_ids) => {
      dispatch(fetchCachedUsers(user_id))
    }
  }
}


let Kyoodos = React.createClass({
  componentWillMount: function() {
    this.props.loadKyoodos();
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
        let to_users = this.parse(k)
        debugger
        this.props.fetchUsers([...to_users, k.from_user_id], function(resp) {
          let all_users = this.props.getAllUsers(),
              from_user = all_users[k.from_user_id]

          kyoodos.push (<Kyoodo
                        key={ k.id }
                        from_user={ from_user }
                        content={ k.content } />)
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
