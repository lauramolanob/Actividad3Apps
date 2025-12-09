import { Text, View } from 'react-native';
import "./global.css";
import { useFonts } from "expo-font";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Haptics from "expo-haptics";
import Button from "./components/Button";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'MontserratItalic': require('./assets/fonts/Montserrat-Italic.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gray-200">
        <View className="px-10 mt-5">
          
          <Text className="text-center font-montserrat-bold text-black text-4xl mb-10">Librería Nexus</Text>
          <Text className="text-center font-montserrat text-black text-2xl mb-10">Nuestros libros</Text>

          <Button
            onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              console.log("Nuevos");}} 
              onLongPress={() => console.log("Nuevos - LongPress")}>
            Nuevos
          </Button>

          <Button onPress={() => console.log("De segunda")} onLongPress={() => console.log("De segunda - LongPress")}>
            De segunda
          </Button>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}