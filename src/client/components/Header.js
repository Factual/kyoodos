import React, { PropTypes } from 'react';
import { Link } from 'react-router'

let Header = React.createClass({
  render: function() {
    return (
      <div className='kyoodos__header top-bar'>
        <div className='top-bar-left small-10 medium-10 columns'>
          <div className='kyoodos__header__logo'>
            <a href="http://www.factual.com/" >
              <div className='kyoodos__header__link logo'></div>
            </a>
            <Link to={`/`}>
              <div className='svg kyoodos__header__link like'></div>
            </Link>
          </div>
        </div >
        <div className='top-bar-right kyoodos__header__menu small-2 medium-2 columns'>
          <Link to={`/explore`}><div className='svg kyoodos__header__link explore'></div></Link>
          <Link to={`/users`}><div className='svg kyoodos__header__link user'></div></Link>
        </div>
      </div>
    )
  }
});

module.exports = Header;
