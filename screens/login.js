import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
import * as Font from "expo-font";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import ForgotPassword from "./forgot_password";

async function loadCustomFont() {
  await Font.loadAsync({
    "custom-font": require("../assets/fonts/CarterOne-Regular.ttf"),
  });
}

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitLogin = () => {
    // if login is successful
    navigation.navigate("Login");
  };

  const submitForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const submitRegister = () => {};

  useEffect(() => {
    loadCustomFont();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/gorilla-logo.jpg")}
            style={styles.logo}
          />
          <Text style={styles.title}>RawApe</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            EMBRACE THE APE
          </Text>
        </View>

        <View style={styles.inputView}>
          <Icon name="email" color="white" size={20}></Icon>

          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <Icon name="lock" color="white" size={20}></Icon>

          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={submitForgotPassword}
        >
          <Text style={{ color: "red", fontSize: 16 }}>Forgot password? </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.loginButton} onPress={submitLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={submitRegister}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: -150,
    marginBottom: 30,
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    marginTop: -20,
    fontFamily: "custom-font",
    fontWeight: "bold",
    fontSize: 60,
  },

  inputView: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 10,
    width: "90%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    paddingLeft: 10,
  },

  TextInput: {
    flex: 1,
    padding: 10,
    color: "white",
    fontSize: 16,
  },

  loginButton: {
    alignItems: "center",
    backgroundColor: "black",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    marginRight: 20,
    width: 150,
  },

  registerButton: {
    alignItems: "center",
    backgroundColor: "#EC3C3C",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    marginLeft: 20,
    width: 150,
  },

  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  forgotPassword: {
    paddingLeft: 10,
    marginBottom: 30,
  },
});

export default Login;
