'use strict'

var test = require('tape')
var document = require('global/document')
var DOMEvent = require('@bendrucker/synthetic-dom-events')
var dispatchEvent = require('./')

test('shorthand', function (t) {
  t.plan(2)
  var div = document.createElement('div')
  div.addEventListener('click', function onClick (event) {
    t.equal(event.type, 'click')
    t.equal(event.button, 2)
  })
  dispatchEvent(div, 'click', {button: 2})
})

test('existing event', function (t) {
  t.plan(2)
  var div = document.createElement('div')
  var event = DOMEvent('click', {button: 0})
  div.addEventListener('click', function onClick (e) {
    t.equal(e, event)
  })
  t.equal(dispatchEvent(div, event), event)
})
