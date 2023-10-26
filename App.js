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
import Dashboard from "./screens/dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ keyboardHandlingEnabled: true }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
          }}
        />

        <Stack.Screen
          name="Reset Password"
          component={ForgotPassword}
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
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
