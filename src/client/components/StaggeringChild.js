import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

let StaggeringChild = React.createClass({
  getDefaultProps: function() {
                     return {
                       tag: 'div'
                     }
                   },
  // called at same time as componentDidMount;
  // only called on initial render.
  componentWillAppear: function(cb) {
                         this._animateIn(cb);
                       },
  // called at same time as componentDidMount;
  // will not be called on initial render.
  componentWillEnter: function(cb) {
                        this._animateIn(cb);
                      },
  // called when child removed from group
  // TransitionGroup will keep in DOM until cb is called
  componentWillLeave: function(cb) {
                        // this._animateOut(cb);
                      },
  _animateIn: function(cb) {
                let el = findDOMNode(this)
                setTimeout(() => {
                  console.log('timed in', this.props.animationInDelay)
                , this.props.animationInDelay})
              },

  render: function() {
            let Comp = this.props.tag
            let { tag, animationInDelay, ...props } = this.props;
            return(<Comp { ...props }>{ this.props.children }</Comp>)
          }
            
})

module.exports = StaggeringChild;
