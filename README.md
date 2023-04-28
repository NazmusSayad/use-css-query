# `use-css-query`

## A tiny hook to track CSS media query state

## Install

```bash
npm i use-css-query
```

```bash
yarn add use-css-query
```

```bash
pnpm add use-css-query
```

## Usage

```js
import useMediaQuery from 'use-css-query'

const App = () => {
  // Accept css query
  const matches = useMediaQuery('(max-width: 768px)')

  return <div>Screen is less than 767px: {matches ? '😃' : '😢'}</div>
}
```
