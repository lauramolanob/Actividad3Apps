import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

export default function BookCard({ book, onPress }) {
    
    const handleAddToCart = () => {
        Alert.alert("Agregado", `${book.titulo} añadido al carrito.`);
    };
    
    return (
        <TouchableOpacity 
            onPress={() => onPress(book)} 
            className="w-full bg-blue-50 border-b border-gray-200 p-4">
            
            <View className="flex-row items-start"> 
                
                <Image
                    source={{ uri: book.imagen }}
                    style={{ width: 150, height: 200 }} 
                    resizeMode="contain"
                    className="mr-4 shadow-sm"/>
                
                <View className="flex-1 justify-between"> 
                    <View> 
                        <Text 
                            className="text-lg font-montserrat text-blue-950" 
                            numberOfLines={3}>{book.titulo}</Text>
                        
                        <Text 
                            className="text-sm font-montserrat-italic text-gray-500 mb-1" 
                            numberOfLines={1}>{book.autor}</Text>
                    </View>
                    
                    <View className="mt-2"> 
                        <Text className="text-2xl font-bold text-blue-950 mb-2">
                            ${book.precio.toFixed(2)}
                        </Text>
                        
                        {/* ME FALTA SUMAR ACÁ UN EFECTO DE TOQUE JIJI */}
                        <TouchableOpacity
                            onPress={handleAddToCart}
                            className="bg-blue-700 py-2 rounded-lg w-full">
                            <Text className="text-white text-center font-montserrat text-base">Añadir al carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </TouchableOpacity>
    );
}