
import React, { Component } from 'react'

class Header extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <header>
        <h1>Hello World</h1>
      </header>
    )
  }
}

export default Header
