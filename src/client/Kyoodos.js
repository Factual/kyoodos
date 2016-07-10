import React, { PropTypes } from 'react'; 
import Kyoodo from './Kyoodo';

// TODO:
// calculate how many kyoodos in array, divide into multiple rows, then render each kyoodo

let Kyoodos = React.createClass({

  render: function() {
    let kyoodos = []
    if (this.props.kyoodos) {
      this.props.kyoodos.forEach((k) => {
        let kyoodo = <Kyoodo 
                      to={k.to}
                      from={k.from}
                      message={k.message} />
        kyoodos.push(kyoodo)
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

module.exports = Kyoodos
