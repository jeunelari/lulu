import * as NavigationBar from "expo-navigation-bar";
import { Link } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { width } = Dimensions.get("window");

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#FFFF");
    NavigationBar.setButtonStyleAsync("dark");
    SystemUI.setBackgroundColorAsync("#FFFF");
  }, []);

  const onboardingData = [
    {
      title: "Trouvez des restaurants par quartier",
      description1: "Explorez une large sélection de",
      description2: "restaurants près de chez vous",
      image: require("../assets/images/lulu.png"),
    },
    {
      title: "Laissez-vous surprendre",
      description1: "Nous vous recommandons le",
      description2: "meilleur restaurant selon vos goûts",
      image: require("../assets/images/bouff.jpeg"),
    },
    {
      title: " Partagez votre avis en un instant",
      description1: "Donnez votre opinion sur des restaurants ",
      description2: "sans avoir besoin de créer un compte",
      image: require("../assets/images/aviss.jpeg"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFF" />

      {/* Bouton "Suivant" en haut à droite */}
      {currentIndex === onboardingData.length - 1 && (
        <View className="absolute z-10 top-4 right-4">
          <Link href="/connexion" asChild>
            <TouchableOpacity className="px-4 py-2 rounded-full bg-primary">
              <Text className="text-lg font-bold text-white">Suivant</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      <Carousel
        loop={false}
        width={width}
        height={600}
        data={onboardingData}
        scrollAnimationDuration={500}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item, index }) => (
          <View key={index} className="items-center justify-center flex-1 px-6">
            <Text className="text-2xl font-bold text-center">{item.title}</Text>
            <View className="items-center mt-2">
              <Text className="text-textSecondary text-[17px]">
                {item.description1}
              </Text>
              <Text className="text-textSecondary text-[17px]">
                {item.description2}
              </Text>
            </View>
            <Image source={item.image} className="w-[300px] h-[350px] mt-8" />
          </View>
        )}
      />

      {/* Indicateurs */}
      <View className="flex flex-row items-center justify-center gap-1 mt-44">
        {onboardingData.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-primary w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
