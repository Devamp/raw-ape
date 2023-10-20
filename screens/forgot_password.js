import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

const Forgot_Password = ({ navigation }) => {
  return (
    <Button onPress={() => navigation.navigate("Login")}>
      Forgot Password Page
    </Button>
  );
};

export default Forgot_Password;
