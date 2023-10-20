import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderHeightContext,
} from "@react-navigation/stack";

import Login from "./screens/login";
import ForgotPassword from "./screens/forgot_password";
import Register from "./screens/register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ keyboardHandlingEnabled: true }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            cardStyle: { backgroundColor: "white" },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "transparent",
            },
          }}
        />

        <Stack.Screen
          name="Reset Password"
          component={ForgotPassword}
          options={{
            title: "",
            cardStyle: { backgroundColor: "white" },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "transparent",
            },
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "",
            cardStyle: { backgroundColor: "white" },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "transparent",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
