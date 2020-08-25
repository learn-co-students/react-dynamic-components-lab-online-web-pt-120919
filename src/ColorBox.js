import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // let newValue = (this.props.opacity - .1);
      return this.props.opacity >= .2 ? (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - .1} />
        </div>
      ) : null
  }

}

