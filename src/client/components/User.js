import React, { PropTypes } from 'react';

// render a user with avatar
let User = React.createClass({
  render: function() {
    let data = this.props.data
    let imageStyle = {
      backgroundImage: "url('" + data.avatar.replace('$1', '?') + "')",
      backgroundSize: 'contain'
    }

    return (
      <div className='column'>
        <span className='avatar thumbnail' height='75' width='75' style={ imageStyle } />
        <span className='user_name'>{ data.first_name }</span>
      </div>
    )
  }
})

User.propTypes = {
  data: React.PropTypes.object.isRequired
}

module.exports = User
