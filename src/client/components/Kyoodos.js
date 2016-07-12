import React, { PropTypes } from 'react'; 
import Kyoodo from './Kyoodo';

let Kyoodos = React.createClass({
  
  render: function() {
    let kyoodos = []
    if (this.props.kyoodos) {
      this.props.kyoodos.forEach((k, i) => {
        kyoodos.push (<Kyoodo 
                      key={i}
                      to={k.to}
                      from={k.from}
                      message={k.message} />)
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
