// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    const updatedMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: updatedMood
    })
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}
