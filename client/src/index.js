import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Kyoodo from './components/Kyoodo'

const rootEl = document.getElementById('root')
const testData = [{
  sender: 'HH',
  receivers: [
    'Forrest',
    'Sarah'
  ],
  content: 'good job!'
},
{
  sender: 'HH',
  receivers: [
    'Front'
  ],
  content: 'yoyo!'
}]

function render() {
  ReactDOM.render(
    <ul>
      {testData.map((x, i) =>
        <Kyoodo sender={x.sender}
                receivers={x.receivers}
                content={x.content} />
      )}
    </ul>,
    rootEl
  )
}

render()
