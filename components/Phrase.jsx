import React from 'react';
import { View, Text } from 'react-native';

export default function Phrase() {
  return (
    <View className="bg-blue-700 p-6 mx-4 rounded-xl my-6">
      <Text className="text-white text-center text-lg font-montserrat-italic leading-6">
        "Los libros son una incomparable magia portátil"
      </Text>
      <Text className="text-blue-200 text-center text-sm font-montserrat mt-3">
        — Stephen King
      </Text>
    </View>
  );
}