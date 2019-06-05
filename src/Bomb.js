// your Bomb code here!
import React from 'react'

const Bomb =(props) =>{
    this.state ={ 
        secondsLeft: props.initialCount
    }
    // const condition =()=> {
    //     if(this.state.secondsLeft === 0){
    //       return  'Boom!'
    //     }else{
    //       return  " " + this.state.secondsLeft + ' seconds left before I go boom!'
    //     }
    // }
    // return condition()
    // return this.state.secondsLeft === 0 ? 'Boom' : this.state.secondsLeft + ' seconds left before i go boom!'
    return <div>{this.state.secondsLeft === 0 ? 'Boom' : this.state.secondsLeft + ' seconds left before i go boom!'}</div>

}

export default Bomb