# Environment Setup

1. Install/Update `brew`:
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Install/Update `node`.
3. Install/Update `watchman`:
```
$ brew install watchman
```
4. Install/Update `yarn`:
```
$ brew install yarn
```
5. Install all project dependencies:
```
$ npm install
```

# Building and Running
1. Start react-native server:
```
$ npm start
```
2. Start a simulator / connect a device
> For running on iOS
```
$ react-native run-ios
```
> For running on Android
```
$ react-native run-android
```
