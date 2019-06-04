// your ImageSlider code here!

// Its initial state should have a property called currentSlideIndex that starts at 0.
// It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.

// constructor

import React, { Component } from 'react'
export default class ImageSlider extends Component {
  constructor() {
    // what is the role of super in this case?
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  increase = () => {
    const goUp = this.state.currentSlideIndex + 1
    this.setState({
      currentSlideIndex: goUp
    })
  }



  render() {
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}
