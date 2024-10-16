import { StyleSheet, Platform, StatusBar, SafeAreaView, StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from 'react';

const SafeAreaContainer = ({ children, style }: { children: ReactNode, style?: StyleProp<ViewStyle> }) => {
  return (
    <SafeAreaView style={[styles.AndroidSafeArea, style]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
