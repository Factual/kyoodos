import React, { PropTypes } from 'react';

// render a user with avatar
let User = React.createClass({
  render: function() {
    return (
      <div className='medium-12 columns kyoodo__section kyoodo__to'>
        <div className='media-object'>
          <div className='media-object-section column'>
            <div>
              <img className='thumbnail' height='75' width='75' src={ this.props.data.avatar } />
              <span>{ this.props.data.first_name }</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

User.propTypes = {
  data: React.PropTypes.object.isRequired
}

module.exports = User
