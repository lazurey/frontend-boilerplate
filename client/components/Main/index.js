
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class Main extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { email, login, actions } = this.props
    return (
      <section className={style.main}>
        <div className={style.email}>
          <input value={email} placeholder='Your email address' />
          <span>@thoughtworks.com</span>
        </div>
        <button className={style.button}>下一步</button>
      </section>
    )
  }
}

export default Main
