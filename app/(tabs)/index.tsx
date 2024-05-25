import { Image,View, StyleSheet, Platform } from 'react-native';
import { Routes } from "../../components/navigation/routes/routes";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccd7e0",
  },
});
