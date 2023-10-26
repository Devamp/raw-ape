import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Alert } from "react-native";
import { firebase, auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [user, setUsername] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  const auth = getAuth();

  const accountCreationAlert = () => {
    Alert.alert(
      "Account Created",
      "Account has been created. Please log in with your new credentials.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ],
      { cancelable: false }
    );
  };

  const passwordMissMatchAlert = () => {
    Alert.alert(
      "Failure",
      "Passwords do not match.",
      [
        {
          text: "Try Again",
        },
      ],
      { cancelable: false }
    );
  };

  const passwordLengthError = () => {
    Alert.alert(
      "Failure",
      "Password should be at least 6 characters.",
      [
        {
          text: "Ok",
        },
      ],
      { cancelable: false }
    );
  };

  const submitRegister = () => {
    if (password1 === password2) {
      createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
          const user = userCredential.user;
          accountCreationAlert();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode == "auth/weak-password") {
            passwordLengthError();
          }
        });
    } else {
      passwordMissMatchAlert();
    }
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
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.title}>JOIN THE</Text>
              <Text style={styles.titleTroop}>TROOP</Text>
            </View>

            <Image
              source={require("../assets/gorilla-logo.jpg")}
              style={styles.logo}
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="person" color="white" size={20}></Icon>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="white"
              onChangeText={(user) => setUsername(user)}
            />
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
              onChangeText={(password1) => setPassword1(password1)}
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="lock" color="white" size={20}></Icon>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(password2) => setPassword2(password2)}
            />
          </View>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={submitRegister}
            >
              <Text style={styles.registerButtonText}>Complete Sign Up</Text>
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
    alignItems: "center",
  },

  logoContainer: {
    marginTop: -90,
    marginBottom: 20,
    alignItems: "center",
  },

  logo: {
    width: 175,
    height: 175,
  },

  title: {
    marginTop: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 45,
  },
  titleTroop: {
    marginTop: 20,
    color: "red",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 45,
    marginLeft: 10,
  },
  inputContainers: {
    backgroundColor: "red",
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 10,
    width: "90%",
    height: 55,
    marginBottom: 10,
    alignItems: "center",
    paddingLeft: 10,
  },

  TextInput: {
    flex: 1,
    padding: 10,
    color: "white",
    fontSize: 16,
  },

  registerButton: {
    alignItems: "center",
    backgroundColor: "#EC3C3C",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    marginLeft: 20,
    width: 220,
  },

  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Register;
