// your ImageSlider code here!
import { Component } from 'react'

class ImageSlider extends Component {
  constructor (props) {
    super(props)
    this.state = { currentSlideIndex: 0 }
  }
  render () {
    return (
      `I am on slide ${this.state.currentSlideIndex}`
    )
  }
}

export default ImageSlider
