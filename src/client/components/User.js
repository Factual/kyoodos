import React, { PropTypes } from 'react';

// render a user with avatar
let User = React.createClass({
  render: function() {
    return (
      <div className='column'>
        <img className='avatar thumbnail' height='75' width='75' src={ this.props.data.avatar } />
        <span className='user_name'>{ this.props.data.first_name }</span>
      </div>
    )
  }
})

User.propTypes = {
  data: React.PropTypes.object.isRequired
}

module.exports = User