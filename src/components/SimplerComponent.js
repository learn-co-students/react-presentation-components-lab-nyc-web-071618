import React, {Component} from 'react'

//create stateless functional component SimplerComponent
const SimplerComponent = (props) => {
  // console.log(props.handleClick)
  //render <div> to page that contains text: "I am just happy"
  return (
    <div onClick={() => {props.handleClick()}}>"I am just happy"</div>
  )
}

export default SimplerComponent

//receives property handleClick that performs some sort of action in response to a click
