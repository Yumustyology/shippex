# ShippEx App

ShippEx is a shipment management mobile app built with React Native and Expo. It includes features like shipment tracking, shipment selection, and a barcode scanning feature.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
  - [On Android](#on-android)
  - [On iOS](#on-ios)
  - [On Web](#on-web)
  - [On Expo Go](#on-expo-go)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running this app, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- A compatible mobile device or emulator:
  - Android: Android Studio with AVD or a physical device
  - iOS: Xcode with iOS Simulator or a physical iOS device (Expo Go app)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Yumustyology/shippex.git
   cd shippex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. If you are using a physical device, install the [Expo Go](https://expo.dev/client) app from Google Play Store (Android) or App Store (iOS).

## Running the App

### On Android

1. Start the Expo development server:
   ```bash
   npm run android
   ```

2. If you have a physical device, scan the QR code displayed in the terminal using the Expo Go app, or run the app directly on an Android emulator.

### On iOS

1. Start the Expo development server:
   ```bash
   npm run ios
   ```

2. If you are using a physical device, scan the QR code displayed in the terminal using the Expo Go app, or run the app on an iOS simulator.

> **Note:** Running the app on an iOS simulator requires a Mac with Xcode installed.

### On Web

1. Start the Expo development server for the web:
   ```bash
   npm run web
   ```

2. Open the browser at the URL displayed in the terminal.

### On Expo Go

To run the app on a physical device using the Expo Go app:

1. Start the Expo development server with the following command:
   ```bash
   npm start
   ```

2. Open the Expo Go app on your physical device (available for download from Google Play Store or App Store).

3. Scan the QR code displayed in the terminal with your device's camera or Expo Go scanner.

4. The app will load on your device in Expo Go.

> **Tip:** Ensure both your computer and mobile device are connected to the same Wi-Fi network for the best experience.

## Dependencies

This project uses the following major dependencies:
- **React Native** (v0.74.5): Core framework for building mobile apps.
- **Expo** (v51.0.28): A framework and platform for universal React applications.
- **@react-navigation/native**: Handles navigation within the app.
- **@react-navigation/bottom-tabs**: Implements bottom tab navigation.
- **@react-navigation/stack**: Implements stack-based navigation.
- **react-native-camera**: Provides access to the device camera.
- **react-native-paper**: UI component library for React Native.
- **expo-barcode-scanner**: Expo's barcode scanning module.
- **react-native-vector-icons**: Popular icon library for React Native.

For a full list of dependencies, see the `package.json` file.

## Troubleshooting

- **Expo Issues**: If you encounter issues with the Expo app, make sure it is updated to the latest version.
- **iOS Simulator Issues**: If you cannot run the iOS simulator, ensure Xcode and command line tools are properly installed.
- **Permission Issues**: Make sure the app has the necessary permissions for the camera and barcode scanner on your physical device.

## Contributing

Contributions are welcome! If you want to contribute, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.