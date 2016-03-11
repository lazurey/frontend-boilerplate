
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import * as LoginActions from '../../actions/login'
import style from './style.css'

class Login extends Component {
  render() {
    const { email, login, actions, children } = this.props
    return (
      <div className={style.normal}>
        <Header />
        <Main email={email} login={login} actions={actions} />
        <Footer />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(
  mapDispatchToProps
)(Login)
