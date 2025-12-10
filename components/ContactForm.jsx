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

    const handleSubmit = () => {
        Alert.alert("Formulario Enviado", `Tipo de ayuda seleccionado: ${helpType}`);
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
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">Nombre y apellido</Text>
                    <TextInput
                        className="border border-gray-300 p-3 rounded-lg bg-white"
                        onChangeText={setNombre}
                        value={nombre}
                    />
                </View>

                <View className="mb-4 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">Correo electrónico</Text>
                    <TextInput
                        className="border border-gray-300 p-3 rounded-lg bg-white"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        placeholder="jesus@example.com"
                    />
                </View>

                <View className="mb-4 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">¿Cómo te podemos ayudar?</Text>
                    <View className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                        <Picker
                            selectedValue={helpType}
                            onValueChange={(itemValue) => setHelpType(itemValue)}
                            style={{ height: 50, width: '100%' }}
                        >
                            <Picker.Item label="— Elige una opción —" value="" enabled={false} />
                            <Picker.Item label="1. Pregunta" value="pregunta" />
                            <Picker.Item label="2. Reclamos" value="reclamos" />
                            <Picker.Item label="3. Felicitación" value="felicitacion" />
                        </Picker>
                    </View>
                </View>

                {helpType === 'reclamos' && (
                    <CamposIterables 
                        issueType={issueType} 
                        setIssueType={setIssueType} 
                    />
                )}

                <View className="mb-6 px-4">
                    <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">Describe tu situación</Text>
                    <TextInput
                        className="border border-gray-300 p-3 rounded-lg bg-white"
                        onChangeText={setDescripcion}
                        value={descripcion}
                        multiline={true}
                        numberOfLines={4}
                        style={{ height: 100, textAlignVertical: 'top' }} // Para que el texto empiece arriba
                    />
                </View>

                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-blue-700 py-3 mx-4 rounded-lg items-center shadow-md active:bg-blue-950"
                >
                    <Text className="text-white text-base font-montserrat">Enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}