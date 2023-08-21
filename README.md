# MFEREPACK

React Native (Super App) boilerplate for Micro Front Ends

## Usage


Install dependencies:

```bash
yarn bootstrap
```

Pod install iOS *(Only for iOS)*

```bash
yarn pod-install
```


Start development servers separately:

```bash
# todo:: configure with yarn workspace
yarn start:app1
yarn start:app2
yarn start:host
```

Run Host app:

```bash
yarn run:host:ios
yarn run:host:android
```

Run Standalone:
```bash
# App One
yarn run:app1:ios
yarn run:app1:android

# App Two
yarn run:app2:ios
yarn run:app2:android
```

Focus On:
```bash
# NPM Package install as dev
    "@callstack/repack"
    "@react-native-community/eslint-config"
    "@types/jest"
    "babel-loader"
    "terser-webpack-plugin"
    "webpack"

# Files
 in all app add file 1- react-native.config.js 2- webpack.config.mis
 and  in RNSuperApp check index.js and App.tsx

```