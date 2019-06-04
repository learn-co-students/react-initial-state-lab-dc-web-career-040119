// your Bomb code here!
import React, { Component } from 'react'
export default class Bomb extends Component{

  constructor(props) {
    // why does super not accept props?
    // where is secondsLeft defined? I had the constructor below, but that
    // threw errors (when I had super(props))
    super()
      this.state = {
          secondsLeft: props.initialCount
      }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return(
      <div>{message}</div>
    )
  }
}







// class MyComp extends React.Component {
//
//   // we use the constructor to set the INITIAL STATE
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }
//
//   // our increment method makes use of the 'setState' method, which is what we use to alter state
//   increment = () => {
//     const newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     })
//   }
//
//   render() {
//     return (
//       <div onClick={this.increment}>
//         {this.state.count}
//       </div>
//     )
//   }
// }

//
// Let's create a component that represents a bomb timer that counts down until it
// reaches `0`. However, the only thing we're going to focus on right now is
// setting the initial state of the bomb: the amount of seconds left on the timer.
// Since bomb timers can differ, we'll pass in a prop to our `Bomb` component to
// determine what the starting count should be.
//
// 1.  Its initial state should have a property called `secondsLeft`.
// 2.  The initial value of `secondsLeft` is set by passing in an `initialCount`
//     prop to the `Bomb` component. Don't forget to pass the argument props into
//     the constructor (i.e., `constructor(props)`).
// 3.  It should render the text `'<SECONDS_LEFT> seconds left before I go boom!'`,
//     where `<SECONDS_LEFT>` is the value of `secondsLeft`.
// 4.  **If `secondsLeft` equals `0`, it should render `'Boom!'` instead.**
