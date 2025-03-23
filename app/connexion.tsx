import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="px-4 bg-white ">
      {/* Titre principal */}
      <View className="py-12">
        {/* Flèche de retour */}
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            className="w-[35px] h-[35px]"
            source={require("../assets/images/arrow_back.png")}
          />
        </TouchableOpacity>
      </View>

      <View className="px-4">
        <Text className="text-3xl font-bold ">Bon retour parmi nous !</Text>

        {/* Description sous le titre */}
        <Text className="mb-4 text-lg">
          Connectez-vous pour retrouver vos favoris et découvrir encore plus de
          restaurants.
        </Text>
      </View>

      {/* Champ pour e-mail ou nom d'utilisateur */}
      <View className="w-full px-4 ">
        <TextInput
          placeholder="E-mail ou nom d'utilisateur"
          className="w-full p-4 mb-6 border bg-[#ECEDF1] border-gray-300 rounded-xl"
          keyboardType="email-address"
        />

        {/* Bouton "Suivant" */}
        <TouchableOpacity className="px-6 py-3 mb-4 bg-primary rounded-xl">
          <Text className="text-lg font-bold text-center text-white">
            Suivant
          </Text>
        </TouchableOpacity>

        {/* Texte "Ou" */}
        <Text className="mb-4 text-lg text-center">Ou</Text>

        {/* Bouton pour se connecter avec Google */}
        <TouchableOpacity className="px-6 py-3 mb-4 bg-blue-500 rounded-xl">
          <Text className="text-lg font-bold text-center text-white">
            Se connecter avec Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
