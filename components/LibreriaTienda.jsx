import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, Image, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'; 
import axios from 'axios';

const API_URL = 'https://mock.apidog.com/m1/968218-952913-default/books';

export default function BooksSection() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(API_URL);
        setBooks(response.data);
      } catch (error) {
        console.error("Error", error);
        Alert.alert("Error", "No se pudieron cargar los libros");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleAddToCart = (book) => {
    Alert.alert("Añadido al carrito", `${book.titulo} ha sido añadido al carrito`);
    console.log("Libro añadido:", book);
  };

  const handleCardPress = (book) => {
    Alert.alert(book.titulo, book.descripcion || "Ver detalles del libro");
  };

  const renderBookCard = ({ item }) => (
    <TouchableOpacity 
      onPress={() => handleCardPress(item)}
      className="bg-white rounded-xl shadow-md mb-4 overflow-hidden"
      style={{ width: '100%' }}
    >
      <View className="w-full items-center bg-white py-4">
        <Image
          source={{ uri: item.imagen || 'https://via.placeholder.com/200x300' }}
          className="w-48 h-64"
          resizeMode="contain"
        />
      </View>
      
      <View className="p-4 bg-white">
        <Text className="text-lg font-montserrat-bold text-blue-950 mb-1">
          {item.titulo}
        </Text>
        
        <Text className="text-sm text-gray-400 font-montserrat-italic mb-1">
          {item.autor}
        </Text>

        {item.sinopsis && (
          <Text className="text-sm text-gray-700 font-montserrat mb-3" numberOfLines={3}>
            {item.sinopsis}
          </Text>
        )}
        
        <Text className="text-xl font-montserrat-bold text-blue-700 mb-3">
          ${item.precio}
        </Text>
        
       <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          className="bg-blue-700 py-3 rounded-lg"
        >
          <Text className="text-white text-center font-montserrat text-base">
           Añadir al carrito
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1">
        <View className="p-4">
      <View className="mb-4">
        <Text className="text-xl font-montserrat-bold text-blue-950">
          Conoce nuestros libros disponibles
        </Text>
        <Text className="text-base font-montserrat text-blue-950 py-4">
          Encuentra los best-sellers del momento, clásicos esenciales y las últimas publicaciones de tus autores favoritos.
        </Text>
      </View>

      {loading ? (
        <Text className="text-blue-700 text-center mt-10">Cargando libros...</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderBookCard}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          ListEmptyComponent={() => (
            <Text className="text-blue-700 text-center w-full mt-10">
              Ups! No hay libros disponibles
            </Text>
          )}
        />
      )}
    </View>
      </ScrollView>
    </SafeAreaProvider>
    
  );
}