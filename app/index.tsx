import * as NavigationBar from "expo-navigation-bar";
import { useRouter } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Change the navigation bar background color and button style
    NavigationBar.setBackgroundColorAsync("#00c6ff");
    NavigationBar.setButtonStyleAsync("dark");

    // Change the gesture bar background color
    SystemUI.setBackgroundColorAsync("#00c6ff");

    // Simulate a loading process
    setTimeout(() => {
      setIsLoaded(true);
      router.push("/OnboardingScreen"); // Navigate to the onboarding screen after the delay
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <SafeAreaView className="items-center justify-center h-full bg-primary">
      <StatusBar barStyle="dark-content" backgroundColor="#00c6ff" />
      <Text className="text-5xl font-bold text-white">lulu.</Text>
    </SafeAreaView>
  );
}
