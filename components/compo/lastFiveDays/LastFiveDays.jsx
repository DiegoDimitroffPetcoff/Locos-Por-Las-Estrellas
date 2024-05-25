import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const LastFiveDays = ({ todayImage }) => {
  const { navigate } = useNavigation();
  function handleView(todayImage) {
    navigate("Details", { todayImage });
  }
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 12,
          textAlign: "center",
          fontWeight: "bold",
          color: "#81848c",
        }}
      >
        Last 5 Days
      </Text>

      {todayImage?.map((todayImage, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.title}>{todayImage.title}</Text>

          <Text style={styles.date}>{todayImage.date}</Text>
          <Button title="View" onPress={() => handleView(todayImage)} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    backgroundColor: "#141313",
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
    color: "white",
  },
  text: {
    color: "#141313",
    fontStyle: "italic",
    fontWeight: "500",
    alignItems: "center",
    fontSize: 30,
  },
  date: {
    color: "white",
  },
});
