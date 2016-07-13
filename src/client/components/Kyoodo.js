import React, { PropTypes } from 'react';

// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    return (
      <div
        className='columns kyoodo'>
        <div className='row'>
          <div className='medium-12 columns kyoodo__section kyoodo__from'>
            <div className='media-object'>
              <div className='media-object-section'>
                <div className='thumbnail'>
                  <img src={ this.props.from.avatar } />
                </div>
                <span>{ this.props.from.first_name } </span>
              </div>
            </div>
          </div>
          <div className='medium-12 columns kyooodo__section kyoodo__message'>
            <blockquote> { this.props.message } </blockquote>
          </div>
          <div className='medium-12 columns kyoodo__section kyoodo__to'>
            <div className='media-object'>
              <div className='media-object-section'>
                <div className='thumbnail'>
                  <img src={ this.props.to.avatar } />
                </div>
                <span>{ this.props.to.first_name }</span>
              </div>
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
