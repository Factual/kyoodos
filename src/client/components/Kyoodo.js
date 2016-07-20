import React, { PropTypes } from 'react';
import User from './User'
import Message from './Message'
import { parseKyoodoContent } from '../utils'


// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    let receivers = [];
    this.props.receivers.forEach((r) => {
      receivers.push(<User key={ r.id } data={ r } />)
    })

    return (
      <div
        className='columns kyoodo'>
        <div className='row'>
          <User data = { this.props.from_user } />
          <div className='medium-12 columns kyooodo__section kyoodo__message'>
            <Message users={this.props.users} message={ this.props.content } />
          </div>
          { receivers }
        </div>
      </div>
    )
  }
})

Kyoodo.propTypes = {
  content: React.PropTypes.string
}

module.exports = Kyoodo
