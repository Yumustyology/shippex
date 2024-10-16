import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import {
  loginState,
  setLoginError,
  setLoginEmail,
  setLoginPassword,
  setLoginUrl,
} from "../../../entities/login.entity";

const { height: screenHeight } = Dimensions.get("window");

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const { url, email, password, error, buttonDisabled } = loginState.use();

  useEffect(() => {
    const isDisabled =
      !email ||
      !password ||
      !url ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password) ||
      !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(url);
    loginState.set((prev) => ({ ...prev, buttonDisabled: isDisabled }));
  }, [url, email, password]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headText}>Login</Text>
        <Text style={styles.subText}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>

        <TextInput
          textColor="#2F50C1"
          label="URL"
          mode="outlined"
          activeOutlineColor="#2F50C1"
          outlineColor="transparent"
          value={url}
          placeholderTextColor="#A7A3B3"
          onChangeText={setLoginUrl}
          onBlur={() => {
            if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(url)) {
              setLoginError("url", "Please enter a valid URL.");
            } else {
              setLoginError("url", "");
            }
          }}
          style={styles.input}
          error={!!error.url}
        />
        {error.url && <Text style={styles.errorText}>{error.url}</Text>}

        <TextInput
          label="Username / Email"
          mode="outlined"
          activeOutlineColor="#2F50C1"
          textColor="#2F50C1"
          outlineColor="transparent"
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          placeholderTextColor="#A7A3B3"
          autoCapitalize="none"
          value={email}
          onChangeText={setLoginEmail}
          onBlur={() => {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              setLoginError("email", "Please enter a valid email address.");
            } else {
              setLoginError("email", "");
            }
          }}
          style={styles.input}
          error={!!error.email}
        />
        {error.email && <Text style={styles.errorText}>{error.email}</Text>}

        <TextInput
          label="Password"
          placeholderTextColor="#A7A3B3"
          mode="outlined"
          textColor="#2F50C1"
          activeOutlineColor="#2F50C1"
          outlineColor="transparent"
          value={password}
          onChangeText={setLoginPassword}
          onBlur={() => {
            if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password)) {
              setLoginError(
                "password",
                "Password must be at least 6 characters long and contain a number."
              );
            } else {
              setLoginError("password", "");
            }
          }}
          secureTextEntry
          style={styles.input}
          error={!!error.password}
        />
        {error.password && (
          <Text style={styles.errorText}>{error.password}</Text>
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: loginState.get().buttonDisabled
              ? "gray"
              : "#2F50C1",
          },
        ]}
        onPress={() => onLogin()}
        disabled={loginState.get().buttonDisabled}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#F4F2F8",
    borderRadius: 17,
    color: "#2F50C1",
  },
  headText: {
    fontSize: 34,
    color: "black",
    fontWeight: "bold",
    marginBottom: 16,
  },
  subText: {
    fontSize: 17,
    color: "#757281",
    fontWeight: "100",
    marginBottom: 38,
  },
  errorText: {
    color: "indianred",
    marginTop: -15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: screenHeight * 0.15,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginForm;
