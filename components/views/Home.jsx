import { StyleSheet, Text, View } from "react-native";
import { Header } from "../compo/common/Header";
import { CurrentImages } from "../compo/curretImages/CurrentImages";
import { LastFiveDays } from "../compo/lastFiveDays/LastFiveDays";
import { FetchGet } from "../utils/fetch";
import { useEffect, useState } from "react";

import { DaysFormater } from "../utils/daysFormater";

export const Home = () => {
  const [todayImage, setTodayImage] = useState([]);
  const [LastImages, setLastImages] = useState([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await FetchGet();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.log(error);
      }
    };

    const loadLastImages = async () => {
      try {
        let template = `&start_date=${DaysFormater().fiveDaysAgo}&end_date=${
          DaysFormater().today
        }`;

        const LastImagesResponse = await FetchGet(template);
        setLastImages(LastImagesResponse);
      } catch (error) {
        console.log(error);
      }
    };
    loadTodayImage();
    loadLastImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <CurrentImages todayImage={todayImage} />
      <LastFiveDays todayImage={LastImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccd7e0",
  },
});
