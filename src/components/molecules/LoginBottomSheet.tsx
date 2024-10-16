import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Onboarding from "../../screens/Onboarding";
import { Ionicons } from "@expo/vector-icons";
import LoginForm from "../atoms/forms/LoginForm";
import {
  loginState,
  resetLoginState,
  setLoginError,
} from "../../entities/login.entity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../../lib/types/RootParamList.type";

const { height: screenHeight } = Dimensions.get("window");

const LoginBottomSheet: React.FC = () => {
  const refRBSheet = useRef<RBSheet>(null);

  type NavigationProp = StackNavigationProp<RootParamList>;

  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    const { email, password, url } = loginState.get();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    let hasError = false;

    if (!emailRegex.test(email)) {
      setLoginError("email", "Please enter a valid email address.");
      hasError = true;
    }

    if (!passwordRegex.test(password)) {
      setLoginError(
        "password",
        "Password must be at least 6 characters long and contain a number."
      );
      hasError = true;
    }

    if (hasError) {
      return;
    }

    Alert.alert("Success", `Logged in with ${email}`);

    resetLoginState();

    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });

    refRBSheet.current?.close();
  };

  return (
    <View style={{ flex: 1 }}>
      <Onboarding openBottomSheet={() => refRBSheet.current?.open()} />
      <RBSheet
        height={screenHeight * 0.9}
        draggable
        ref={refRBSheet}
        dragOnContent
        closeOnPressBack
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#A7A3B3",
          },
          container: [
            {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            },
          ],
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              resetLoginState();
              refRBSheet.current?.close();
            }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={24} color="#4561DB" />
            <Text style={{ color: "#4561DB", fontSize: 17 }}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <LoginForm onLogin={handleLogin} />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    marginBottom: -15,
  },
});

export default LoginBottomSheet;
