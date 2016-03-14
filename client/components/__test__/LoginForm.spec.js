import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '../LoginForm'

describe('<LoginForm />', () => {
  it('should render a login form with an email field', () => {
    const wrapper = shallow(<LoginForm />)
    wrapper.find('input').length.should.be.equal(1)
  })
})
