import React, { PropTypes } from 'react';
import Kyoodo from './Kyoodo';
import { getKyoodosAndUsers } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    kyoodos: state.kyoodos
  }
}

let Kyoodos = React.createClass({
  componentWillMount: function() {
    this.props.getKyoodosAndUsers().then(() => {
    })
  },
  render: function() {
    let data = this.props.kyoodos.state
    if (data) {
      if (data.kyoodos.length > 0 && Object.keys(data.users).length > 0) {
        let kyoodos = []
        data.kyoodos.forEach((k) => {
          kyoodos.push(<Kyoodo key = { k.id }
                               from_user = { data.users[k.from_user_id] || 'unknown' }
                               content = { k.content } />)
        })
        return (
          <div className='row medium-unstack kyoodos'>
            { kyoodos }
          </div>
        )
      }
    } else {
      return (<div className='kyoodos'>No kyoodos found :( </div>)
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
