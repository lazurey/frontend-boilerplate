
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
    const { user, actions, children } = this.props
    return (
      <div className={style.normal}>
        <Header />
        <Main user={user} actions={actions} />
        <Footer />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('Login container')
  console.log(state)
  return {
    user: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
