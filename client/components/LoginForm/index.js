
import React, { Component, PropTypes } from 'react'
import style from './style.css'

const TW_EMAIL = '@thoughtworks.com'

class LoginForm extends Component {
  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      email: ''
    }
  }

  _handleChange(e) {
    this.setState({ email: e.target.value })
  }

  _login() {
    const { actions } = this.props
    actions.login(this.state.email + TW_EMAIL)
  }

  render() {
    const { user } = this.props
    return (
      <section className={style.main}>
        <div className={style.email}>
          <input
            type="text"
            onChange={::this._handleChange}
            value={this.state.email}
            placeholder="Your email address"
          />
          <span className={style.suffix}>{TW_EMAIL}</span>
        </div>
        <button onClick={::this._login} className={style.button}>邮件验证</button>
      </section>
    )
  }
}

export default LoginForm
