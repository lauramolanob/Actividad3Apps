import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import CamposIterables from './CamposIterables'; 

export default function ContactForm() {
    const [helpType, setHelpType] = useState('');
    const [issueType, setIssueType] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [numeroPedido, setNumeroPedido] = useState('');

    const handleSubmit = () => {
        // Validaciones básicas
        if (!nombre.trim() || !email.trim()) {
            Alert.alert("Error", "Por favor completa todos los campos obligatorios");
            return;
        }

        if (!helpType) {
            Alert.alert("Error", "Por favor selecciona cómo te podemos ayudar");
            return;
        }

        // Si es reclamo, validar campos adicionales
        if (helpType === 'reclamos' && (!numeroPedido.trim() || !issueType)) {
            Alert.alert("Error", "Por favor completa los detalles del reclamo");
            return;
        }

        // Crear objeto con los datos del formulario
        const formData = {
            nombre,
            email,
            helpType,
            descripcion,
            ...(helpType === 'reclamos' && {
                numeroPedido,
                issueType
            })
        };

        console.log("Datos del formulario:", formData);
        
        Alert.alert(
            "Formulario Enviado", 
            `Gracias ${nombre}. Hemos recibido tu ${helpType === 'reclamos' ? 'reclamo' : helpType === 'pregunta' ? 'pregunta' : 'mensaje'}.`
        );

        // Limpiar formulario después de enviar
        setNombre('');
        setEmail('');
        setHelpType('');
        setIssueType('');
        setDescripcion('');
        setNumeroPedido('');
    };

    return (
        <ScrollView className="flex-1 bg-white p-4">
            <Text className="text-xl font-montserrat-bold text-blue-950 mb-1 mt-2 pl-4">
                Contacto y soporte
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed font-montserrat p-4 pb-8">
                Estamos para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </Text>
            
            <View>
                <View className="mb-4 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                        Nombre y apellido <Text className="text-red-500">*</Text>
                    </Text>
                    <TextInput
                        className="border border-gray-300 p-3 rounded-lg bg-white font-montserrat"
                        onChangeText={setNombre}
                        value={nombre}
                        placeholder="Jesús"
                    />
                </View>

                <View className="mb-4 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                        Correo electrónico <Text className="text-red-500">*</Text>
                    </Text>
                    <TextInput
                        className="border border-gray-300 p-3 rounded-lg bg-white font-montserrat"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        placeholder="jesus@example.com"
                        autoCapitalize="none"
                    />
                </View>

                <View className="mb-4 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                        ¿Cómo te podemos ayudar? <Text className="text-red-500">*</Text>
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                "¿Cómo te podemos ayudar?",
                                "Selecciona una opción",
                                [
                                    {
                                        text: "Pregunta",
                                        onPress: () => {
                                            setHelpType('pregunta');
                                            setIssueType('');
                                            setNumeroPedido('');
                                        }
                                    },
                                    {
                                        text: "Reclamos",
                                        onPress: () => setHelpType('reclamos')
                                    },
                                    {
                                        text: "Felicitación",
                                        onPress: () => {
                                            setHelpType('felicitacion');
                                            setIssueType('');
                                            setNumeroPedido('');
                                        }
                                    },
                                    {
                                        text: "Cancelar",
                                        style: "cancel"
                                    }
                                ]
                            );
                        }}
                        className="border border-gray-300 rounded-lg bg-white p-3 flex-row justify-between items-center font-montserrat"
                    >
                        <Text className="text-gray-700 font-montserrat">
                            {helpType === 'pregunta' ? 'Pregunta' : 
                             helpType === 'reclamos' ? 'Reclamos' : 
                             helpType === 'felicitacion' ? 'Felicitación' : 
                             '— Elige una opción —'}
                        </Text>
                        <Text className="text-gray-500">▼</Text>
                    </TouchableOpacity>
                </View>

                {helpType === 'reclamos' && (
                    <CamposIterables 
                        issueType={issueType} 
                        setIssueType={setIssueType}
                        numeroPedido={numeroPedido}
                        setNumeroPedido={setNumeroPedido}
                    />
                )}

                <View className="mb-6 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                        Describe tu situación
                    </Text>
                    <TextInput
                        className="border border-gray-300 p-3 rounded-lg bg-white font-montserrat"
                        onChangeText={setDescripcion}
                        value={descripcion}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Cuéntanos más detalles..."
                        style={{ height: 100, textAlignVertical: 'top' }}
                    />
                </View>

                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-blue-700 py-3 mx-4 rounded-lg items-center shadow-md active:bg-blue-950 mb-8"
                >
                    <Text className="text-white text-base font-montserrat-bold">Enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}