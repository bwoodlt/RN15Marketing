# RN15Marketing

A simple app with embedded WebView and key utilities to get up and running with bulding a robust application.

## Testing

**Unit and E2E (End-to-End) Testing** for this app is done with **Jest** and **Detox**.

More information on Jest can be found at [jestjs.io](https://jestjs.io/).

### Overview of files and directories

1.  `/_tests_/` - Contains test files for components and others.
1.  `/src/application/` - Contains hooks, navigation and other utils.
1.  `/src/business/services/` - For localization.
1.  `/src/core` - For Styles, Fonts, Theme and other assets.
1.  `/src/features` - Contains reusable components ingested into modules for usage.
1.  `/src/modules` - Contains key pages where components are used..
1.  [`jest.config.js`](./jest.config.js) - Configuring Jest to work with Gatsby and handle its own Babel configuration.

## Starting App

To run app, please run `yarn install` from the project root. Then go to the `/ios` folder and run `pod install`. Incase you don't have cocoapods installed, run this command `sudo gem install cocoapods` to install. For more information, kindly review this [Cocoapods Setup Tutorial](https://reactnative.dev/docs/environment-setup)

Once this is complete and all cocoapod modules are added, run `yarn start` from the root to start Metro, the JS bundler. With this running, run `yarn ios` to see app in iOS simulator or `yarn android` for Android counterpart. To setup environment for Android development, please follow this [Android Devevlopment Environment Setup Tutorial](https://reactnative.dev/docs/environment-setup)
