import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'
import { jsdom } from 'jsdom'
require('es6-promise').polyfill()
require('fetch-everywhere')

chai.use(chaiEnzyme())
chai.use(chaiJsx)

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator
