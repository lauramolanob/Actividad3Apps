import React from 'react';
import { View, Text, Image } from 'react-native';

export default function BannerHome() {
  return (
    <View className="w-full mb-5"> 
        <View 
            className="flex-row overflow-hidden bg-blue-700">
            <View className="flex-1 pt-8 pb-8 pl-6 pr-6 justify-center">
                <Text className="text-white text-2xl font-montserrat-bold mb-1">
                    ¡Nuevos títulos cada semana!
                </Text>
                <Text className="text-white text-sm font-montserrat" style={{ opacity: 0.9 }}>
                    Aprovecha 10% de descuento en novelas seleccionadas.
                </Text>
            </View>
            
            <Image 
                source={require('../assets/library.jpg')}
                style={{ width: 150, height: '100%' }} 
                resizeMode="cover"
            />
        </View>
    </View>
  );
}