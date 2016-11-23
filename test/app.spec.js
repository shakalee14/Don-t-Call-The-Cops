'use strict'

import React from 'react'
import { expect } from 'chai'
import ReactDom from 'react-dom'
import jsdom from 'jsdom'
import { mount, shallow, render } from 'enzyme'

import { App } from '../browser/components/App'

describe('<App />', () => {
  it('should mount the component', () => {
    const wrapper = render( <App /> )
    expect(wrapper).to.have.text(' JustUs ')
  })
})
