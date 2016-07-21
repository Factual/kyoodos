import React, { PropTypes } from 'react';
import UserAvatar from './UserAvatar'
import Message from './Message'
import { parseKyoodoContent } from '../utils'


// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    let receivers = [];
    this.props.receivers.forEach((r) => {
      receivers.push(<UserAvatar key={ r.id } data={ r } />)
    })

    return (
      <div
        className='columns kyoodo'>
        <div className='row'>
          <div className='medium-12 columns kyoodo__section kyoodo__from'>
            <UserAvatar data = { this.props.from_user } />
          </div>
          <div className='medium-12 columns kyooodo__section kyoodo__message'>
            <Message users={this.props.users} message={ this.props.content } />
          </div>
          <div className='medium-12 row kyoodo__section kyoodo__to'>
            { receivers }
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
