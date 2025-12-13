import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import "./global.css";
import { useFonts } from "expo-font";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Haptics from "expo-haptics";
import Button from "./components/Button";
import SuscripcionNews from "./components/SuscripcionNews";
import ContactForm from "./components/ContactForm";
import QuienesSomos from "./components/QuienesSomos";
import BooksSection from "./components/LibreriaTienda";
import UserProfile from "./components/UserProfile";
import Home from './components/Home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';




  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={Home} options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => {const iconName = focused ? 'home' : 'home-outline';
            return <Icon name={iconName} size={size} color={color} />;}, }}/>

      <Tab.Screen name='Perfil' component={UserProfile} options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            const iconName = focused ? 'person' : 'person-outline';
            return <Icon name={iconName} size={size} color={color} />;}, }}/>
    </Tab.Navigator>
  );
}


 
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
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen
          name="Inicio"
          component={TabsNavigator}
        />
        <Drawer.Screen name='Libreria' component={BooksSection} />
        <Drawer.Screen name='Noticias' component={SuscripcionNews} />
        <Drawer.Screen name='Contacto' component={ContactForm} />
        <Drawer.Screen name='Sobre Nosotros' component={QuienesSomos} />
      </Drawer.Navigator>

    </NavigationContainer>
  </SafeAreaProvider>

  );

  
}

