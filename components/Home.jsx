import React, { useState, useEffect }from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from './SearchBar';
import axios from 'axios';
import BookCard from './BookCard';

const API_URL = 'https://mock.apidog.com/m1/968218-952913-default/books';

export default function Home() {

const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(API_URL);
        setBooks(response.data);
      } catch (error) {
        console.error("Error", error);
        Alert.alert("Error", "No se pudieron cargar los libritos");
      }
    };
    fetchBooks();
  }, []);

  const booksToShow = books.slice(0, 15);

  const handleViewMore = () => {
    console.log("Navegando a la lista completa de libros...");
    Alert.alert("Ver Más", "Implementar navegación a la pantalla de lista completa.");
  };

  const handleCardPress = (book) => {
    console.log(`Ver detalles del libro: ${book.titulo}`);
  };


  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1">
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





            <View className="p-4">
                  <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-xl font-montserrat-bold text-blue-950">Libros Destacados</Text>
                  </View>
            
                  <FlatList
                    data={booksToShow}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
                    renderItem={({ item }) => (
                        <BookCard book={item} onPress={handleCardPress} />
                    )}
                    scrollEnabled={false} 
                    contentContainerStyle={{ paddingBottom: 2 }}
                    ListEmptyComponent={() => (
                         <Text className="text-blue-700 text-center w-full mt-10">Ups! No hay libros disponibles</Text>
                    )}
                  />
            
                  {books.length > 5 && (
                    <TouchableOpacity 
                      onPress={handleViewMore}
                      className="bg-blue-950 py-3 rounded-lg mt-2 w-full"
                    >
                      <Text className="text-white text-center font-montserrat text-base">Ver más libros</Text>
                    </TouchableOpacity>
                  )}
                </View>

    </View>
      </ScrollView>
    </SafeAreaProvider>
    
    
    
  );
}