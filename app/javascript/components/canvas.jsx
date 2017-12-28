import "babel-polyfill";
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DrawableCanvas from 'react-drawable-canvas'

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: false,
      lastX: null,
      lastY: null
    };
  }

  mouseEnter = (e) => {
    if(this.state.drawing) {
      let x = Math.round(e.clientX - e.currentTarget.getBoundingClientRect().x);
      let y = Math.round(e.clientY - e.currentTarget.getBoundingClientRect().y);
      let ctx = e.currentTarget.getContext('2d');
      ctx.fillStyle = 'black';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.state.lastX, this.state.lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      this.setState({
        lastX: x,
        lastY: y
      });
      // console.log(e);
      // console.log("clientx", e.clientX);
      // console.log("pagex", e.pageX);
      // console.log("calc x", e.clientX - e.currentTarget.getBoundingClientRect().x);
      // console.log("calc y", e.clientY - e.currentTarget.getBoundingClientRect().y);
    }
  };

  mouseDown = (e) => {
    this.setState({
      drawing: true,
      lastX: Math.round(e.clientX - e.currentTarget.getBoundingClientRect().x),
      lastY: Math.round(e.clientY - e.currentTarget.getBoundingClientRect().y)
    });
  };

  mouseUp = (e) => {
    this.setState({drawing: false})
  };

  clearCanvas = () => {
    let ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0, 0, 56, 56)
  };

  analyze = () => {
    const data = this.refs.canvas.getContext('2d').getImageData(0,0,56,56);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify({
      softmax: {
        data: 'hi'
      }
    });
    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: body
    };
    fetch('http://localhost:3000/analysis/softmax', myInit)
        .then(response => response.json())
        .then(data => console.log(data))
  };

  render() {
    return[
        <canvas id="drawing-pad"
                onMouseMove={this.mouseEnter}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
                style={{"border": "1px solid black"}}
                height="56"
                width="56"
                ref="canvas">
        </canvas>,
        <button onClick={this.clearCanvas}>Clear</button>,
        <button onClick={this.analyze}>Analyze</button>
    ]
  }
}

export default Canvas
