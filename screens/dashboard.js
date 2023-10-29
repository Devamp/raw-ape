import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const Dashboard = ({ navigation }) => {
  const submitAccount = () => {};

  const submitHome = () => {};

  const submitPost = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Raw</Text>
          <Image
            source={require("../assets/gorilla-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Ape</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.welcomeBox}>
            <Text style={styles.welcomeText}>Welcome USER</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Icon
            onPress={submitHome}
            reverse
            name="home"
            color="red"
            size={22}
          ></Icon>
          <Icon
            onPress={submitPost}
            reverse
            name="add"
            color="red"
            size={35}
          ></Icon>
          <Icon
            onPress={submitAccount}
            reverse
            name="person"
            color="red"
            size={22}
          ></Icon>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginBottom: 10,
    backgroundColor: "black",
  },

  headerText: {
    marginTop: 2,
    color: "red",
    fontSize: 38,
    fontFamily: "Futura",
    fontWeight: "bold",
  },

  logo: {
    width: 45,
    height: 80,
  },

  contentContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "black",
  },

  welcomeBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },

  welcomeText: {
    fontFamily: "Futura",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },

  footerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    flexDirection: "row",
    height: 80,
  },
});

export default Dashboard;
