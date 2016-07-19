import React, { PropTypes } from 'react';
import User from './User'

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
            <blockquote> { this.props.content } </blockquote>
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
