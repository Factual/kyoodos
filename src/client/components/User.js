import React, { PropTypes } from 'react'
import Message from './Message'
import UserAvatar from './UserAvatar'
import { Link } from 'react-router'

let User = React.createClass({
  render: function() {
    return (
      <div className='columns kyoodo'>
        <div className='row'>
          <div className='medium-12 columns kyoodo__section kyoodo__from'>
            <Link to={`/users/${this.props.data.id}`}>
            <UserAvatar data = { this.props.data } />
            </Link>
          </div>
          <div className='medium-12 columns kyoodo__section'>
            <div><strong>Name:</strong> { this.props.data.username } </div>
            <div><strong>Count of kudos sent:</strong> { this.props.data.count_of_sent_kyoodos || "none :(" } </div>
            <div><strong>Count of kudos received:</strong> { this.props.data.count_of_received_kyoodos || "none :(" } </div>
            <div className='medium-12 columns kyooodo__section kyoodo__message'>
            { (() => {
              if (this.props.data.last_received) {
                return (
                  <Message message= { this.props.data.last_received.content } users={ this.props.users } />
                )
              }
            })() }
            </div>
          </div>
        </div>
      </div>
    )
  }
})

User.propTypes = {
  data: React.PropTypes.object
}

module.exports = User
