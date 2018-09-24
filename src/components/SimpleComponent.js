// Code SimpleComponent Here
import React, {Component} from 'react'
class SimpleComponent extends Component {
state = {
  mood: "happy"
}

  handleMood = () => {
    const moods = this.state.mood === "happy" ?  "sad"  : "happy"
    this.setState({
      mood: moods
    })
  }

  render(){
    return (
      <div onClick={this.handleMood}>
        {this.state.mood}
      </div>
    )
  }
}


export default SimpleComponent
