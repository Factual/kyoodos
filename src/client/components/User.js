import React, { PropTypes } from 'react'
import UserAvatar from '../components/UserAvatar'

let User = React.createClass({
  render: function() {
    return (
      <div className='columns kyoodo'>
        <div className='row'>
          <div className='medium-12 columns kyoodo__section kyoodo__from'>
            <UserAvatar data = { this.props.data } />
          </div>
          <div className='medium-12 columns kyoodo__section'>
            <div>Name: { this.props.username } </div>
            <div>Kyoodos sent: { this.props.data.count_of_sent_kyoodos } </div>
            <div>Last received kyoodo: </div>
            <div>Last sent kyoodo: </div>
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
