import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreenComp from "./src/components/organisms/SplashScreen";
import Home from "./src/screens/Home";
import * as SplashScreen from "expo-splash-screen";
import LoginBottomSheet from "./src/components/molecules/LoginBottomSheet";
import { PaperProvider } from "react-native-paper";
import AppNavigator from "./src/screens/Home";

const Stack = createStackNavigator();


export default function App() {
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  return (
    <PaperProvider
      theme={{
        colors: {
          onSurfaceVariant: "#A7A3B3",
        },
      }}  
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={AppNavigator} />
          <Stack.Screen name="SplashScreen" component={SplashScreenComp} />
          <Stack.Screen name="Onboarding" component={LoginBottomSheet} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
