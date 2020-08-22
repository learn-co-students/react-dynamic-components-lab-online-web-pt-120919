import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity;
    if (this.props.opacity >= 0.2) {
      return(
        <div className="color-box" style={{opacity: opacity}}>
          <ColorBox opacity={opacity - 0.1} />
        </div> 
      )
    }

    return null;

    // return (opacity >= 0.2 ? <div className="color-box" style={{opacity: opacity}}><ColorBox opacity={opacity - 0.1} /></div> : null);
  }
}

