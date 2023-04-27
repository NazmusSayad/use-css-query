# `@NazmusSayad/use-css-query`

## A tiny hook to track CSS media query state

## Install

```bash
npm i use-css-query
```

## Usage

```js
import useMediaQuery from 'use-css-query'

const App = () => {
  // Accept css query
  const matches = useMediaQuery('(max-width: 767px)')

  return <div>Screen is less than 767px: {matches ? '😃' : '😢'}</div>
}
```
