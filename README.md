# Fooxly Transfer icon library

Icon library used inside Fooxly Transfer.

## Installation React-Native

Add babel-plugin-inline-import to your dev dependencies.

```sh
yarn add babel-plugin-inline-import --dev
```

Place the following code inside your .babelrc

```json
"plugins": [
  ...,
  ["babel-plugin-inline-import", {
    "extensions": [".svg"]
  }]
]
```
