// Code SimpleComponent Here

import React from 'react'

class SimpleComponent extends React.Component{

  state ={
    mood: 'happy'
  }

  handleMood = () =>{
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }

  render(){
    return(
      <div onClick={this.handleMood}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
