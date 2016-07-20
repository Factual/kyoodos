import React, { PropTypes } from 'react';
import User from './User'
import { parseKyoodoContent } from '../utils'

// render a single kyoodo
let Kyoodo = React.createClass({
  render: function() {
    let receivers = [];
    this.props.receivers.forEach((r) => {
      receivers.push(<User key={ r.id } data={ r } />)
    })

    let message = parseKyoodoContent(this.props.content).reduce((prev, m) => {
      if (typeof(m) == 'object') {
        if (m.type == 'user') {
          prev += '<span class="user" title="@' + m.id + '">' + m.id + '</span>'
        } else if (m.type == 'emoji') {
          prev += '<span class="emoji" title="' + m.txt + '">' + '<span class="emoji-inner" style="background: url(https://h2.slack-edge.com/e4cee/img/emoji_2016_02_06/sheet_apple_64_indexed_256colors.png);' + m.position + ';background-size:4100%"/>' + '</span>'
        } else {
          prev += m
        }
      }
      return prev
    }, "" )

    debugger

    return (
      <div
        className='columns kyoodo'>
        <div className='row'>
          <User data = { this.props.from_user } />
          <div className='medium-12 columns kyooodo__section kyoodo__message'>
            <blockquote> { message } </blockquote>
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
