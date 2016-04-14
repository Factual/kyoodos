import React, { Component, PropTypes } from 'react'

class Kyoodo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { sender, receivers, content } = this.props
    return (
      <li>
        <h3>To: {sender}</h3>
        <h3>From: {receivers.join(', ')}</h3>
        <p>
          {content}
        </p>
      </li>
    )
  }
}

Kyoodo.propTypes = {
  content: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  receivers: PropTypes.array.isRequired
}

export default Kyoodo
