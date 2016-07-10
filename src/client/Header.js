import React, { PropTypes } from 'react';

let Header = React.createClass({ 
  render: function() {
    return (
      <div
        className='row kyoodos__header'>
        <div className='small-6 columns kyoodos__header__logo'>
          <img src="" alt="logo here"/>
          <span className='kyoodos__header__title'>| kyoodos</span>
        </div>
        <div className='small-6 row align-right kyoodos__header__menu'>
          <span>explore - TODO! </span>
          <span>current user - TODO! </span>
        </div>
      </div>
    )
  }
});

module.exports = Header;
