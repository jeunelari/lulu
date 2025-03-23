import * as NavigationBar from "expo-navigation-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";

function HomePage() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#fff");
    NavigationBar.setButtonStyleAsync("dark");

    SystemUI.setBackgroundColorAsync("#fff");
  }, []);

  return (
    <View className="items-center justify-center flex-1 h-full ">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Text>Page</Text>
    </View>
  );
}

export default HomePage;
