import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="surprendsmoi" options={{ title: "Au pif" }} />
      <Tabs.Screen name="mesfavoris" options={{ title: "Favoris" }} />
      <Tabs.Screen name="profil" options={{ title: "Profil" }} />
    </Tabs>
  );
}
