import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderHeightContext,
} from "@react-navigation/stack";

import Login from "./screens/login";
import ForgotPassword from "./screens/forgot_password";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ keyboardHandlingEnabled: true }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login Screen",
            cardStyle: { backgroundColor: "white" },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "Forgot Password Screen",
            cardStyle: { backgroundColor: "white" },
            headerTintColor: "white",
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
