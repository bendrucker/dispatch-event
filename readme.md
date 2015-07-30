# dispatch-event [![Build Status](https://travis-ci.org/bendrucker/dispatch-event.svg?branch=master)](https://travis-ci.org/bendrucker/dispatch-event)

> Dispatch an event from a DOM element


## Install

```
$ npm install --save dispatch-event
```


## Usage

```js
var dispatchEvent = require('dispatch-event')
var div = document.createElement('div')

div.addEventListener('click', function onClick (event) {
  console.log('Clicked!')  
})

// Use the shorthand
dispatchEvent(div, 'click', {
  button: 2
})
//=> clicked!

// or an already constructed event object
var event = new MouseEvent('click', {
  button: 2
})
dispatchEvent(div, event)
```

## API

#### `dispatchEvent(element, event, [options])` -> `event`

Dispatches the event and returns the event.

##### element

*Required*  
Type: `DOMElement`

A DOM element on which the event will be dispatched.

##### event

*Required*  
Type: `string` / `event`

A full event object or an event name.

##### options

Type: `object`  
Default: `{}`

Event options. Only used when `event` is a string. When an existing event is passed in, this will be ignored.


## License

MIT © [Ben Drucker](http://bendrucker.me)
