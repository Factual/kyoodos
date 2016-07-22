import React, { PropTypes } from 'react';
import UserAvatar from './UserAvatar'
import Message from './Message'
import { Link } from 'react-router'


// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    let receivers = [];
    this.props.receivers.forEach((r, id) => {
      receivers.push(
        <Link to={`/users/${r.id}`}>
          <UserAvatar key={ id } data={ r } />
        </Link>
      )
    })

    return (
      <div
        className='columns kyoodo'>
        <div className='row'>
          <div className='medium-12 row kyoodo__section kyoodo__to'>
            { receivers }
          </div>
          <div className='medium-12 columns kyooodo__section kyoodo__message'>
            <Message users={this.props.users} message={ this.props.content } />
          </div>
          <div className='medium-12 columns kyoodo__section kyoodo__from'>
            <i>- by </i>
            <Link to={`/users/${this.props.from_user.id}`}>
              @{ this.props.from_user.username}
            </Link>
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
