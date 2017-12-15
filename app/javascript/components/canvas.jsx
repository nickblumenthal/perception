import "babel-polyfill";
import React, { Component } from 'react'
import DrawableCanvas from 'react-drawable-canvas'

class Canvas extends Component {

  mouseEnter = (e) => {
    console.log(e);
    console.log("clientx", e.clientX);
    console.log("pagex", e.pageX);
  };

  render() {
    return(
        <canvas id="drawing-pad"
                onMouseEnter={this.mouseEnter}
                style={{"border": "1px solid black", "height": "56px", "width": "56px"}}>
        </canvas>
    )
  }
}

export default Canvas
