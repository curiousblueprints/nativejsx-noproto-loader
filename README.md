## nativejsx-noproto-loader

This is a webpack loader to go with the fork of nativejsx that does not add to the HTMLElement prototype. If you are using the original nativejsx, you should use the original nativejsx-loader.

## nativejsx-loader
So you're using Webpack. Of course you are – have a loader.
#### Example
```javascript
let config = {
  // ...
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: 'nativejsx-loader',
        excludes: /node_modules/,
        query: {
          variablePrefix: '_',
          declarationType: 'let'
        }
      }
    ]
  }
};
```
#### Juicy Note :godmode:
With Webpack modules, we're able to include nativejsx dependencies for you.

*(That means don't worry about `appendChildren.js`, `setAttributes.js`, or `setStyles.js`.)*
