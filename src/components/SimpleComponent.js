import React, {Component} from 'react'

class SimpleComponent extends React.Component{
    state ={
        mood:'happy'
    }

    onClick = (e) => {
        if(this.state.mood==='happy'){
        this.setState({
            mood:'sad'
        })
        } else if(this.state.mood==='sad'){
        this.setState({
            mood:'happy'
        })
      }
    }  

    render(){
        return(
            <div onClick={this.onClick}>
                {this.state.mood}
            </div>
        )
    }

} // end of SimpleComponent class

export default SimpleComponent