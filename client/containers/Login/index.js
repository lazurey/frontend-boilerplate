
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import * as LoginActions from '../../actions/login'
import style from './style.css'

class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    actions: PropTypes.object,
    children: PropTypes.object
  }

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
