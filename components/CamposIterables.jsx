import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const CamposIterables = ({ issueType, setIssueType }) => (
    <View className="mt-4 border-l-4 border-red-500 pl-3">
        <Text className="text-lg font-bold text-red-600 mb-3">Detalles del Reclamo</Text>
        
        <View className="mb-6 px-4">
            <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">Número de Pedido</Text>
            <TextInput
                className="border border-gray-300 p-3 rounded-lg bg-white"
                placeholder="Escribe el número de pedido"
                keyboardType="numeric"
            />
        </View>

        <View className="mb-6 px-4">
            <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">Tipo de reclamo</Text>
            <View className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                <Picker
                    selectedValue={issueType}
                    onValueChange={(itemValue) => setIssueType(itemValue)}
                    style={{ height: 50, width: '100%' }}
                >
                    <Picker.Item label="— Selecciona el tipo de reclamo —" value="" enabled={false} />
                    <Picker.Item label="Producto Dañado" value="damaged" />
                    <Picker.Item label="Producto Incorrecto" value="wrong" />
                    <Picker.Item label="Tardanza en tiempo de entrega" value="late" />
                    <Picker.Item label="Solicitud de devolución de dinero" value="return" />
                </Picker>
            </View>
        </View>

        <View className="mb-6 px-4">
            <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">Adjuntar soporte (Opcional)</Text>
            <TouchableOpacity 
                onPress={() => Alert.alert("Subir Archivo", "Funcionalidad de subida de archivos aquí.")}
                className="flex-row items-center justify-between p-3 border border-gray-300 rounded-lg bg-gray-100"
            >
                <Text className="text-gray-500">Seleccionar archivo...</Text>
                <Text className="text-blue-700 font-bold">Adjuntar</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default CamposIterables;