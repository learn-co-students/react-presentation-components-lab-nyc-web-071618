import React, {Component} from 'react'

//create class component SimpleComponent
class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'//should have state property mood w/ default value happy
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {// when clicked,
    //component's mood toggles between happy & sad states
    if(this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    } else{
      this.setState({
        mood: 'happy'
      })
    }
    console.log('clicked')
  }

  render() {
    // console.log(this.state.mood)
    //renders current mood state to page in a div
    //implements handleClick that serves as callback to <div>'s click event
    return (
      <div onClick={() => {this.handleClick()}}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
