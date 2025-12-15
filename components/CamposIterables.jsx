import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const CamposIterables = ({ issueType, setIssueType, numeroPedido, setNumeroPedido }) => {
    
    const handleIssueTypeSelect = () => {
        Alert.alert(
            "Tipo de reclamo",
            "Selecciona el tipo",
            [
                {
                    text: "Producto Dañado",
                    onPress: () => setIssueType('damaged')
                },
                {
                    text: "Producto Incorrecto",
                    onPress: () => setIssueType('wrong')
                },
                {
                    text: "Tardanza en tiempo de entrega",
                    onPress: () => setIssueType('late')
                },
                {
                    text: "Solicitud de devolución de dinero",
                    onPress: () => setIssueType('return')
                },
                {
                    text: "Cancelar",
                    style: "cancel"
                }
            ]
        );
    };

    const getIssueTypeLabel = () => {
        switch(issueType) {
            case 'damaged': return 'Producto Dañado';
            case 'wrong': return 'Producto Incorrecto';
            case 'late': return 'Tardanza en tiempo de entrega';
            case 'return': return 'Solicitud de devolución de dinero';
            default: return '— Selecciona el tipo de reclamo —';
        }
    };

    return (
        <View className="mb-4 mx-4 border-l-4 border-blue-200 pl-4 bg-blue-20 py-4 rounded-r-lg">
            <Text className="text-base font-montserrat-bold text-blue-700 mb-4">
                Detalles del Reclamo
            </Text>
            
            <View className="mb-4">
                <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                    Número de Pedido <Text className="text-red-500">*</Text>
                </Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg bg-white"
                    placeholder="Ej: 123456"
                    keyboardType="numeric"
                    value={numeroPedido}
                    onChangeText={setNumeroPedido}
                />
            </View>

            <View className="mb-4">
                <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                    Tipo de reclamo <Text className="text-red-500">*</Text>
                </Text>
                <TouchableOpacity
                    onPress={handleIssueTypeSelect}
                    className="border border-gray-300 rounded-lg bg-white p-3 flex-row justify-between items-center"
                >
                    <Text className="text-gray-700 font-montserrat">
                        {getIssueTypeLabel()}
                    </Text>
                    <Text className="text-gray-500">▼</Text>
                </TouchableOpacity>
            </View>

            <View className="mb-2">
                <Text className="text-sm font-montserrat-bold text-gray-700 mb-1">
                    Adjuntar soporte (Opcional)
                </Text>
                <TouchableOpacity 
                    onPress={() => Alert.alert("Subir Archivo", "Funcionalidad no disponible por el momento")}
                    className="flex-row items-center justify-between p-3 border border-gray-300 rounded-lg bg-gray-100 active:bg-gray-200"
                >
                    <Text className="text-gray-500 font-montserrat">Seleccionar archivo...</Text>
                    <Text className="text-blue-700 font-montserrat-bold">📎 Adjuntar</Text>
                </TouchableOpacity>
                <Text className="text-xs text-gray-500 font-montserrat mt-1">
                    Formatos aceptados: JPG, PNG, PDF (máx. 5MB)
                </Text>
            </View>
        </View>
    );
};

export default CamposIterables;