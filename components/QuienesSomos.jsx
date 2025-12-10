import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const QuienesSomos = ({ nombre }) => (
    <View className="py-8 px-2 bg-white mx-8">
        
        <View className="w-full items-left">
            
            <View className="text-left mb-6">
                <Text className="text-xl font-montserrat-bold text-blue-950 mb-1 px-4 ">
                    {nombre || 'Quiénes Somos'}
                </Text>
            </View>
            
            <View className="w-full max-w-sm"> 
                <Text className="text-base font-montserrat text-blue-950 py-4 px-4">
                    En Librería Nexus, nos dedicamos a ser el punto de unión y referencia para todos
                    los amantes de la literatura en España. Nuestro proyecto nació con la firme convicción de que un
                    libro es la puerta a un mundo de conocimiento y emoción, y nos esforzamos por ofrecer un catálogo
                    extenso y riguroso que abarca desde los clásicos ineludibles hasta las voces contemporáneas más
                    prometedoras. Buscamos ser un espacio de descubrimiento constante, donde cada lector pueda
                    encontrar el título que resuene con sus intereses, ya sea en ficción, ensayo, historia o poesía.
                </Text>
                
                 <Text className="text-base font-montserrat text-blue-950 py-4 px-4">
                    Nuestra filosofía se centra en la excelencia del servicio y la creación de una
                    comunidad lectora. El equipo de Nexus está compuesto por profesionales apasionados, listos para
                    asesorarle con conocimiento y entusiasmo. Más allá de la venta, entendemos nuestra librería como
                    un centro cultural: un lugar para el intercambio de ideas, la celebración de eventos y la
                    promoción de la lectura. Lo invitamos a cruzar nuestro umbral y a hacer de Librería Nexus su
                    cómplice en cada nueva aventura literaria.
                </Text>
            </View>
        </View>
    </View>
);

export default QuienesSomos;