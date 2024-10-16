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

## Features

### 1. Barcode Scanning
The app includes a barcode scanning feature, allowing users to quickly and accurately enter shipment information by scanning barcodes. This functionality enhances efficiency by reducing manual entry errors.

### 2. Shipment Filtering
Users can filter shipments based on various criteria, such as status (e.g., received, delivered, canceled) or date. This feature simplifies tracking and management by allowing users to focus on specific shipments that require attention.

### 3. Search Functionality
The integrated search bar enables users to find specific shipments easily by entering keywords or AWB (Air Waybill) numbers. The search updates dynamically, providing instant feedback as users type.

### 4. Pull to Refresh
To keep shipment data up to date, the app supports a pull-to-refresh feature. Users can simply swipe down on the shipment list to refresh the content and retrieve the latest updates from the server.

### 5. Select and Deselect All
Users can select or deselect all shipments in the list with a single tap. This feature is particularly useful for bulk actions, allowing users to manage multiple shipments simultaneously.

### 6. Expand Shipment Information
Each shipment entry can be expanded to reveal more details. Users can tap on a shipment to view additional information, such as the origin, destination, and mobile contact. This feature enhances the user experience by keeping the interface clean while still providing access to detailed information.

### 7. Call and WhatsApp Messaging
The app provides functionality for users to directly call or message contacts via WhatsApp. Users can tap on a mobile number associated with a shipment to initiate a call or open a WhatsApp chat, streamlining communication and enhancing customer service capabilities.

### 8. Bottom Tabs Navigation
The app utilizes bottom tab navigation for easy access to different sections, such as Home, Shipments, and Profile. This design enhances usability, allowing users to navigate seamlessly between features without losing context.

## Troubleshooting

- **Expo Issues**: If you encounter issues with the Expo app, make sure it is updated to the latest version.
- **iOS Simulator Issues**: If you cannot run the iOS simulator, ensure Xcode and command line tools are properly installed.
- **Permission Issues**: Make sure the app has the necessary permissions for the camera and barcode scanner on your physical device.

## Contributing

Contributions are welcome! If you want to contribute, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.