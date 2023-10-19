import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Login from "./screens/login";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </ScrollView>
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
