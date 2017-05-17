import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Layout from './Layout'

console.log('process.env.NODE_ENV =', process.env.NODE_ENV)

const rootEl = document.getElementById('root')

const render = () => {
  console.debug('render()')
  ReactDOM.render(
    // Root component should be placed in separate file (module) to allow hot reload
    // React Router leaves a warning (Warning: [react-router] You cannot change <Router routesGen>; it will be ignored)
    // but it seems that hot reloading of routed components works.
    <AppContainer>
      <Layout />
    </AppContainer>,
    rootEl
  )
}

if (process.env.NODE_ENV !== 'production') {
  // Should be gone @see https://github.com/react-toolbox/react-toolbox/pull/1164#issuecomment-276338422
  const { overrideComponentTypeChecker } = require('react-toolbox')
  const isComponentOfType = (classType, reactElement) => (
    reactElement && reactElement.type && (
      reactElement.type === classType ||
      reactElement.type.name === classType.displayName
    )
  )
  overrideComponentTypeChecker(isComponentOfType)
  if (module.hot) {
    module.hot.accept('./Layout', render)
  }
}

render()
