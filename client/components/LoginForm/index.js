
import React, { Component, PropTypes } from 'react'
import style from './style.css'

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
    actions.login(this.state.email)
  }

  render() {
    return (
      <section className={style.main}>
        <div className={style.email}>
          <input
            type="text"
            onChange={::this._handleChange}
            value={this.state.email}
            placeholder="Your github account"
          />
          <span className={style.suffix}>@github.com</span>
        </div>
        <button onClick={::this._login} className={style.button}>Verify</button>
      </section>
    )
  }
}

export default LoginForm
