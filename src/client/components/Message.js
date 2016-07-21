import React, { PropTypes } from 'react';
import { parseKyoodoContent } from '../utils'

let Message = React.createClass({
  _emojiStyles: function(m) {
    return {
      background: 'url(https://h2.slack-edge.com/e4cee/img/emoji_2016_02_06/sheet_apple_64_indexed_256colors.png)' + m.position,
      backgroundSize: '4100%'
    }
  },
  render: function() {
    let messageArray = parseKyoodoContent(this.props.message)

    return (
      React.DOM.blockquote(null,
        messageArray.map((m, i) => {
          if (typeof(m) == 'object') {
            if (m.type == 'user') {
              return (<span key={i} className='user' title={ "@" + m.id }> @{ this.props.users[m.id].username }</span>)
            } 
            if (m.type == 'emoji') {
              return ( 
                <span key={i} className='emoji' title={ m.txt }>
                  <span className='emoji-inner' style={ this._emojiStyles(m) }></span>
                </span>
              )
            }
          } else {
            return (m)
          }

        })
      )
    )

  }
})

Message.propTypes = {
  message: React.PropTypes.string
}

module.exports = Message
