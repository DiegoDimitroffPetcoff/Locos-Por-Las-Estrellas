import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export const DetailsComponent = ({ todayImage }) => {
  console.log(todayImage);
  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: todayImage.url }} />
      </View>
      <Text style={styles.title}>{todayImage.title}</Text>
      <Text style={styles.date}>{todayImage.date}</Text>
      <ScrollView style={styles.explanation}>
        <Text>{todayImage.explanation}</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    aligneContent: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 32,
  },
  image: {
    width: "100%",
    height: 250,
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
  explanation: {
    fontSize: 50,
  },
});
