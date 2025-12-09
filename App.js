import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import "./global.css";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSansRegular': require('./assets/fonts/DM_Sans/DMSansRegular.ttf'),
    'DMSansBold': require('./assets/fonts/DM_Sans/DMSansBold.ttf'),
    'DMSansItalic': require('./assets/fonts/DM_Sans/DMSansItalic.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-blue-500 items-center justify-center">
      <Text 
        className="text-4xl text-white font-bold mb-4" 
        style={{ fontFamily: 'DMSansBold' }}
      >Prueba
      </Text>
      <StatusBar style="light" />
    </View>
  );
}