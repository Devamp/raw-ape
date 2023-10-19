import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
import * as Font from "expo-font";

async function loadCustomFont() {
  await Font.loadAsync({
    "custom-font": require("../assets/fonts/CarterOne-Regular.ttf"),
  });
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loadCustomFont();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/gorilla-logo.jpg")}
          style={styles.logo}
        />
        <Text style={styles.title}>RawApe</Text>
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
    </View>
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
  },
});

export default Login;
