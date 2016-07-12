import React, { PropTypes } from 'react';

let Header = React.createClass({ 
  render: function() {
    return (
      <div className='kyoodos__header top-bar'>
        <div className='top-bar-left'>
          <div className='small-6 columns kyoodos__header__logo'>
            <img src="" alt="logo here"/>
            <span className='kyoodos__header__title'>| kyoodos</span>
          </div>
        </div>
        <div className='top-bar-right kyoodos__header__menu'>
          <span>explore - TODO! </span>
          <span>current user - TODO! </span>
        </div>
      </div>
    )
  }
});

module.exports = Header;
