// your Bomb code here!
import { Component } from 'react'

class Bomb extends Component {
  constructor (props) {
    super(props)
    this.state = { secondsLeft: props.initialCount }
  }
  render () {
    return (
      this.state.secondsLeft > 0
        ? `${this.state.secondsLeft} seconds left before I go boom!`
        : `Boom!`
    )
  }
}

export default Bomb
