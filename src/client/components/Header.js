import React, { PropTypes } from 'react';

let Header = React.createClass({ 
  render: function() {
    return (
      <div className='kyoodos__header top-bar'>
        <div className='top-bar-left small-10 medium-10 columns'>
          <div className='kyoodos__header__logo'>
            <a href="http://www.factual.com/" >
              <div className='kyoodos__header__link logo'></div>
            </a>
            <a href="" title='like'>
              <div className='svg kyoodos__header__link like'></div>
            </a>
          </div>
        </div>
        <div className='top-bar-right kyoodos__header__menu small-2 medium-2 columns'>
          <a href="" title='explore'><div className='svg kyoodos__header__link explore'></div></a>
          <a href="" title='user'><div className='svg kyoodos__header__link user'></div></a>
        </div>
      </div>
    )
  }
});

module.exports = Header;
