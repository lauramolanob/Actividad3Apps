import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function SearchBar({ placeholder = "Buscar películas..." }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Buscando:', searchText);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <View className="mb-8">
      <View className="flex-row items-center bg-white rounded-full px-4 py-3 shadow-sm">
        <Text className="text-xl mr-4">🔍</Text>
        
        <TextInput
          className="flex-1 font-SansRegular text-slate-500 text-base"
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />

        {searchText.length > 0 && (
          <TouchableOpacity onPress={clearSearch}>
            <Text className="text-gray-400 text-xl">✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}