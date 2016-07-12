import React, { PropTypes } from 'react';

// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    return (
      <div
        className='kyoodo'>
        <div className='kyoodo__from'>
          <div className='media-object'>
            <div className='media-object-section'>
              <div className='thumbnail'>
                <img src={ this.props.from.src } />
              </div>
              <span>{ this.props.from.name }</span>
            </div>
          </div>
        </div>
        <div className='kyoodo_message'>
          <p> { this.props.message } </p>
        </div>
        <div className='kyoodo__to'>
          <div className='media-object'>
            <div className='media-object-section'>
              <div className='thumbnail'>
                <img src={ this.props.to.src } />
              </div>
              <span>{ this.props.to.name }</span>
            </div>
          </div>
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
