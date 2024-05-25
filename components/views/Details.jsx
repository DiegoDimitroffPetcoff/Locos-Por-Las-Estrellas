import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Header } from "../compo/common/Header";
import { DetailsComponent } from "../compo/details/details";

export const Deteils = () => {
  const {
    params: { todayImage },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Header />
      <DetailsComponent todayImage={todayImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccd7e0",
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
  explanation: {
    fontSize: 20,
  },
});
