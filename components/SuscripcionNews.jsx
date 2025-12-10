import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function SuscripcionNews() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu correo electrónico');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo válido');
      return;
    }

    setLoading(true);
    
    // Simular envío (aquí conectarías con tu API)
    setTimeout(() => {
      Alert.alert(
        '¡Suscripción exitosa!', 
        `Gracias por suscribirte con ${email}. Recibirás nuestras novedades.`
      );
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <View className="bg-white p-6 mx-4 rounded-xl my-6">
      <Text className="text-xl font-montserrat-bold text-blue-950">
        Suscríbete a nuestro newsletter y recibe ofertas y promociones exclusivas
      </Text>
      <Text className="text-sm font-montserrat text-gray-600 mb-4 py-4">
        Suscríbete y recibe nuestras últimas novedades y ofertas especiales
      </Text>

      <TextInput
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 mb-3 font-montserrat-italic "
        placeholder="Escribe tu email"
        placeholderTextColor="#9ca3af"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        onPress={handleSubscribe}
        disabled={loading}
        className={`py-3 rounded-lg ${loading ? 'bg-blue-400' : 'bg-blue-700'}`}
      >
        <Text className="text-white text-center font-montserrat text-base">
          {loading ? 'Suscribiendo...' : 'Suscribirme ahora'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}