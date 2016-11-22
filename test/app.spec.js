'use strict'

import React from 'react'
import { expect } from 'chai'
import ReactDom from 'react-dom'
import jsdom from 'jsdom'
import { mount, shallow, render } from 'enzyme'

import App from '../browser/components/App'

describe('<App />', () => {
  let wrapper

  beforeEach( () => {
    window.document = jsdom('')
    document.body.appendChild(document.createElement('div'))
  })

  afterEach( () => {
    wrapper.detach()
    window.document = jsdom('')
  })

  it('should mount the component', () => {
    wrapper = mount(
      <App />, {attachTo: document.body.firstChild} )
    expect(wrapper.children('h1').length).to.equal(1)
  })
})
