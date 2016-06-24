# [redux-container-state-globalstate](https://github.com/HansDP/redux-container-state-globalstate)

**Note:** Work in progress. This project is not ready to be used

Provides a [redux-container-state](https://github.com/HansDP/redux-container-state) `view` enhancer that enables access to the Redux global state.

The concept of this enhancer is pretty straight forward: use the [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) method of the [react-redux](https://github.com/reactjs/react-redux) package to connect global state into the view.

## Example usage

```javascript
import React from 'react'
import { compose } from 'redux'

import { view } from 'redux-container-state'
import globalStateEnhancer from 'redux-container-state-globalstate'

const mapStateToProps = (state) => {
  return {
    someGlobalSate: state.some.global.state
  }
}

const enhancedView = compose(globalStateEnhancer(mapStateToProps))(view)

export default enhancedView(({someGlobalState, ...restProperties}) => (
  <div>
    The global state is: { someGlobalState }
  </div>
))
```

### Global dispatch

Because your view can now use global state, it probably will need to dispatch global actions as well.

This can be achieved by requesting the `globalDispatch` property in your view.

```javascript
export default enhancedView(({someGlobalState, globalDispatch, ...restProperties}) => (
  <div>
    The global state is: { someGlobalState }
    <button onClick={ () => globalDispatch({ type: 'GLOBAL_TYPE'}) }>Dispatch something global</button>
  </div>
))
```

## Installation & Usage

You can install `redux-container-state-globalstate` via npm.

```
npm install redux-container-state-globalstate --save
```