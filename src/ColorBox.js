import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  render() {
    if (this.props.opacity > 0.2) {
      const newValue = this.props.opacity-0.1;
      return (
        <div style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newValue} />
        </div>
      )
    } else {
      return null;
    }
  }

}

