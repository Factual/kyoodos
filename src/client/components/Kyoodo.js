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
                // TODO: put back the thumbnail image, change props of from_user and to_user from string
                // to object (after calling DB with user )
                </div>
                <span>{ this.props.from_user_id } </span>
              </div>
            </div>
          </div>
          <div className='medium-12 columns kyooodo__section kyoodo__message'>
            <blockquote> { this.props.content } </blockquote>
          </div>
          <div className='medium-12 columns kyoodo__section kyoodo__to'>
            <div className='media-object'>
              <div className='media-object-section'>
                <div className='thumbnail'>
                </div>
                <span>{ this.props.to_user_id }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

Kyoodo.propTypes = {
  content: React.PropTypes.string
}

module.exports = Kyoodo
