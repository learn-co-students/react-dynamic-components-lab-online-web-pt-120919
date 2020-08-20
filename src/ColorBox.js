import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    let currentOpacity = this.props.opacity;
    return (
      <div className="color-box" style={{ opacity: currentOpacity }}>
        {/* your conditional code here! */}
        {currentOpacity >= 0.2 ? <ColorBox opacity={currentOpacity - 0.1} /> : null}
      </div>
    )
  }

}
