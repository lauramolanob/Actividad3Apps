import {StatusBar} from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import "./global.css";
import { useFonts } from "expo-font";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Haptics from "expo-haptics";
import Button from "./components/Button";
import Welcome from './components/Welcome';
import BannerHome from './components/BannerHome';
import BooksSection from './components/BookSection';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'MontserratItalic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'SansRegular': require('./assets/fonts/SansRegular.ttf'),
    'SansBold': require('./assets/fonts/SansBold.ttf'),
    'SansItalic': require('./assets/fonts/SansItalic.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor="white "/>
        <SafeAreaView className="flex-1 bg-blue-50">
          <ScrollView className="flex-1">
             <Welcome />
             <BannerHome />
             <BooksSection />
          </ScrollView>
         
        </SafeAreaView>
    </SafeAreaProvider>
  );
}