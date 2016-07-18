import React, { PropTypes } from 'react';
import Kyoodo from './Kyoodo';
import { fetchKyoodos, getUser } from '../actions'
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
    getUser: (user_id) => {
      dispatch(getUser(user_id))
    }
  }
}

let Kyoodos = React.createClass({
  componentWillMount: function() {
    this.props.loadKyoodos();
  },
  render: function() {
    let kyoodos = []
    if (this.props.kyoodos) {
      this.props.kyoodos.forEach((k) => {
        // TODO: Get User info
        kyoodos.push (<Kyoodo
                      key={k.id}
                      to_user_id={k.to || "HELLO" }
                      from_user_id ={k.from_user_id}
                      content={k.content} />)
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
