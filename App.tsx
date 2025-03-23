import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import RootLayout from "./app/_layout"; // Importez votre RootLayout
import Onboarding from "./app/onboarding"; // Importez votre composant Onboarding

// Empêchez le Splash Screen de se fermer automatiquement
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  // Chargez les polices ou effectuez d'autres tâches asynchrones ici
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Cachez le Splash Screen une fois que l'application est prête
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (isFirstLaunch === null || !appIsReady) {
    return null; // Affichez un écran de chargement
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {isFirstLaunch ? <Onboarding /> : <RootLayout />}
    </View>
  );
}
