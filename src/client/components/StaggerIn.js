import React, { PropTypes } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import StaggeringChild from './StaggeringChild'

let StaggerIn = React.createClass({
  render: function() {
            let childCount = React.Children.count(this.props.children),
                children = React.Children.map(this.props.children, function(child, idx) {
                  let inDelay = this.props.delay * idx;
                  return(
                    <StaggeringChild key={ child.key } animationInDelay={ inDelay }>
                        { child }
                    </StaggeringChild>
                  )
                }.bind(this))

            return (
              <TransitionGroup>
                { children }
              </TransitionGroup>
              )
          }
})

module.exports = StaggerIn;
