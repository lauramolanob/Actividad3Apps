import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width / 2.4; 

export default function CategoriaCard({ category, onPress }) {
  
  const handlePress = () => {
    onPress(category.url); 
  };
    
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ width: CARD_WIDTH }} 
      className="mr-3"
    >
      <View
       className="flex-col items-center justify-center p-3 rounded-xl bg-blue-100"
        style={{ height: 170 }} 
      >
        
        <Image
          source={{ uri: category.imagen }} 
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
          className="mb-1"
        />
        
        <Text 
         className="text-blue-950 text-xs font-montserrat-bold text-center"
          numberOfLines={1}
        >
          {category.nombre}
        </Text>
      </View>
    </TouchableOpacity>
  );
}