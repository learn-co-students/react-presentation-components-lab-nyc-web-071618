import React from 'react';

const SimplerComponent = (props) => {
  console.log(props)
  return <div onClick={props.handleClick}>"I am just happy"</div>
} // end of SimplerComponent component

export default SimplerComponent;
