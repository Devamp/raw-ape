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
  Alert,
} from "react-native";
import ForgotPassword from "./forgot_password";
import { ScrollView } from "react-native-gesture-handler";
import { firebase, auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const incorrectLoginInfoAlert = () => {
    Alert.alert(
      "Failure",
      "Incorrect email or password.",
      [
        {
          text: "Ok",
        },
      ],
      { cancelable: false }
    );
  };

  const submitLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        incorrectLoginInfoAlert();
      });
  };

  const submitForgotPassword = () => {
    navigation.navigate("Reset Password");
  };

  const submitRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/gorilla-logo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>RawApe</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 10,
                color: "white",
              }}
            >
              EMBRACE THE APE
            </Text>
          </View>

          <View style={styles.inputView}>
            <Icon name="person" color="black" size={20}></Icon>

            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="lock" color="black" size={20}></Icon>

            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={submitForgotPassword}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Forgot password?{" "}
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={submitRegister}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={submitLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: -150,
    marginBottom: 30,
  },

  logo: {
    width: 250,
    height: 250,
  },

  title: {
    marginTop: -20,
    fontFamily: "Futura",
    fontWeight: "bold",
    fontSize: 60,
    color: "red",
  },

  inputView: {
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "white",
  },

  TextInput: {
    flex: 1,
    padding: 10,
    color: "black",
    fontSize: 16,
  },

  loginButton: {
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    marginRight: 0,
    marginLeft: 20,
    width: 150,
  },

  registerButton: {
    alignItems: "center",
    backgroundColor: "#EC3C3C",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    width: 150,
  },

  loginButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },

  registerButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },

  forgotPassword: {
    paddingLeft: 10,
    marginBottom: 30,
  },
});

export default Login;
