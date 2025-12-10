import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert, ActivityIndicator } from 'react-native';
import CategoriaCard from './CategoriaCard';
import axios from 'axios'; 

// AQUÍ USAMOS EL OTRO SISTEMA DE LLAMADO DE DATOS..DIRECTAMENTE CON JSON
const categoriasData = require('../data/categorias.json');

export default function CategoriaSection({ nombre }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(categoriasData);
    setLoading(false);
}, []);

  const handleCategoryPress = (url) => {
    Alert.alert("Navegando", `Ir a la URL: ${url}`);
  };

  if (loading) {
     return (
        <View className="p-4 items-center">
            <ActivityIndicator size="small" color="#1d4ed8" />
        </View>
    );
  }

  return (
    <View className="py-8">
        <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-xl font-montserrat-bold text-blue-950">
                Explora nuestras {nombre || 'categorías'}
            </Text>
        </View>

        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="pl-4" 
        >
            {categoriasData.map((categoria) => (
                <CategoriaCard
                    key={categoria.id}
                    category={categoria}
                    onPress={handleCategoryPress}
                />
            ))}
        </ScrollView>
    </View>
  );
}