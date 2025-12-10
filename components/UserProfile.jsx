import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const USER_NAME = "Jesús";

const menuItems = [
    { id: 'pedidos', name: 'Mis Pedidos', screen: 'Orders' },
    { id: 'favoritos', name: 'Lista de Deseos', screen: 'Favorites' },
    { id: 'datos', name: 'Mis Datos', screen: 'ProfileData' },
    { id: 'soporte', name: 'Soporte', screen: 'Support' },
    { id: 'contacto', name: 'Contacto', screen: 'Contact' },
];

const MenuItem = ({ item }) => {
    const handlePress = () => {
        Alert.alert("Navegación", `Ir a la pantalla: ${item.name}`);
    };

    return (
        <TouchableOpacity 
            onPress={handlePress}
            className="flex-row items-center justify-between p-4 bg-white border-b border-gray-100 active:bg-blue-50"
        >
            <View className="flex-row items-center">
                <Text className="text-sm font-montserrat-bold text-gray-800 ml-3">{item.name}</Text>
            </View>
            
            {/* Flecha de navegación */}
            <FontAwesome name="chevron-right" size={16} color="#9ca3af" />
        </TouchableOpacity>
    );
};


export default function UserProfile({ navigation }) { 
    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                
                <Text className="text-lg font-montserrat-bold text-blue-950 mb-1 mt-2 pl-4">
                    Hola {USER_NAME}!
                </Text>

                <View className="mb-6 p-4 rounded-lg">
                    <Text className="text-base text-gray-700 leading-relaxed font-montserrat">
                        Estamos encantados de tenerte de vuelta. Selecciona la opción que requieras
                    </Text>
                </View>

                <View className="bg-white rounded-xl shadow-md overflow-hidden">
                    {menuItems.map((item) => (
                        <MenuItem 
                            key={item.id} 
                            item={item} 
                        />
                    ))}
                </View>

            </View>
        </ScrollView>
    );
}