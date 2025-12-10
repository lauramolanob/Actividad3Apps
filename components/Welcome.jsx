import React from 'react';
import { View, Text, Image} from 'react-native';
import SearchBar from './SearchBar';

export default function Welcome() {
  return (
    <View className="w-full bg-blue-50 pt-5 pb-0 mb-0 rounded-t-lg">
        <View className="px-5">
            <View className="flex-row items-center mb-4">
                <View>
                    <Text className="text-blue-950 text-base font-montserrat">
                        ¡Hola Jesús!
                    </Text>
                </View>
            </View>
        </View>
        
        <View className="w-full pl-2 pr-2">
            <View className="px-2">
                <SearchBar placeholder="Buscar películas, cines..." />
            </View>
        </View>
    </View>
  );
}