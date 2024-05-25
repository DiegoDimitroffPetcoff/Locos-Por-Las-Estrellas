import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const CurrentImages = ({ todayImage }) => {
  const { navigate } = useNavigation();
  function handleView() {
    navigate("Details", { todayImage });
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: todayImage.url }} />
      </View>
      <Text style={styles.title}>{todayImage.title}</Text>
      <Text style={styles.date}>{todayImage.date}</Text>
      <Button title="View" onPress={handleView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    backgroundColor: "#898d90",
    padding: 16,
    borderRadius: 32,
  },
  imageContainer: {
    aligneContent: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 32,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#81848c",
    borderRadius: 32,
  },
  title: {
    fontSize: 20,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: "#141313",
    fontStyle: "italic",
    fontWeight: "500",
    alignItems: "center",
    fontSize: 30,
  },
});
