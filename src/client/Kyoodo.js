import React, { PropTypes } from 'react';

// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    return (
      <div
        className='kyoodo'>
        <div className='kyoodo__from'>
          <span>{ this.props.from }</span>
        </div>
        <div className='kyoodo_message'>
          { this.props.message }
        </div>
        <div className='kyoodo__to'>
          <span>{ this.props.to }</span>
        </div>
      </div>
    )
  }
})

Kyoodo.propTypes = {
  message: React.PropTypes.string,
  to: React.PropTypes.object,
  from: React.PropTypes.object
}

module.exports = Kyoodo
