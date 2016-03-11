
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class Main extends Component {
  constructor(props, context) {
    super(props, context)
  }

  _login() {
    const { actions } = this.props
    console.log('_login')
    actions.login('xxx@thoughtworks.com')
  }

  render() {
    const { user } = this.props
    return (
      <section className={style.main}>
        <div className={style.email}>
          <input type='text' name='email' placeholder='Your email address' />
          <span className={style.suffix}>@thoughtworks.com</span>
        </div>
        <button onClick={::this._login} className={style.button}>下一步</button>
        <div>
          测试信息
          <p>{user.email}</p>
          <p>{user.token}</p>
        </div>
      </section>
    )
  }
}

export default Main
