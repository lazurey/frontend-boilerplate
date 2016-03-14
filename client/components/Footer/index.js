
import React, { Component } from 'react'
import style from './style.css'

class Footer extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <footer className={style.normal}>
        <p>Copyright Information</p>
      </footer>
    )
  }
}

export default Footer
