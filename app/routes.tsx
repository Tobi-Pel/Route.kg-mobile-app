import { View, Text, StyleSheet, Image , TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import CodeButton from '@/components/CodeButton'
import { useFonts } from 'expo-font';
import Card from '@/components/Card';

export default function RoutesScreen() {
    const [text , onChangeText] = React.useState('');
    const [cards, setCards] = React.useState([
        {color: 'skyblue', id: '1', number: '108', type: 'маршрутка'}, 
        {color: 'green', id: '2', number: '110', type: 'маршрутка'},
        {color: 'red', id: '3', number: '8', type: 'автобус'},
        {color: 'skyblue', id: '4', number: '108', type: 'маршрутка'}, 
        {color: 'green', id: '5', number: '110', type: 'маршрутка'},
        {color: 'red', id: '6', number: '8', type: 'автобус'},
        {color: 'skyblue', id: '7', number: '108', type: 'маршрутка'}, 
        {color: 'green', id: '8', number: '110', type: 'маршрутка'},
        {color: 'red', id: '9', number: '8', type: 'автобус'},
    ]);

    const [current , setCurrent] = React.useState('0');

    const [fontsLoaded] = useFonts({
        "Josefin Sans": require("../assets/fonts/JosefinSansBold.ttf")
      });
    
      if(!fontsLoaded) {
        return (
          <Text>Loading...</Text>
        )
      }

  return (
    <View style={styles.container}>
        <CodeButton />
        <Text style={styles.heading}>Выберите маршрут</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Введите номер маршрута или улицу..."
        />
        <View style={styles.cardBox}>
            {text === "" ? 
                    <FlatList 
                    keyExtractor={((item) => item.id)}
                    numColumns={3}
                    data={cards}
                    renderItem={({item})=> (
                        <Card 
                            color={item.color} 
                            text={item.number} 
                            type={item.type}
                            id={item.id}
                            setCurrent={setCurrent}
                            clicked={current === item.id ? true : false}
                        /> 
                    )}
                />
                :
                <FlatList 
                    keyExtractor={((item) => item.id)}
                    numColumns={3}
                    data={cards}
                    renderItem={({item})=> (
                        item.number.includes(text) ? 
                            <Card 
                                color={item.color} 
                                text={item.number} 
                                type={item.type}
                                id={item.id}
                                setCurrent={setCurrent}
                                clicked={current === item.id ? true : false}
                            /> 
                            : null
                    )}
                />
            }
            
        </View>
        
        <View style={current === "0" ? styles.buttOff : styles.butt}>
            <Text style={current === "0" ? styles.buttOffText : styles.buttText}>Далее</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center'
    },
    forImg: {
        width: 156,
        height: 144,
    },
    heading: {
        color: '#31375b',
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Josefin Sans',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        color: '#31375b',
        height: 46,
        marginBottom: 10,
        width: '75%',
        padding: 5,
        paddingLeft: 15,
        fontSize: 14
    },
    cardBox: {
        height: 400,
    },
    butt: {
        width: 195,
        height: 46,
        borderRadius: 30,
        backgroundColor: '#31375B',
        marginTop: 20,
        paddingTop: '2%'
      },
      buttText: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Josefin Sans',
        width: '100%',
        height: '100%',
        textAlign: 'center'
      },
      buttOff: {
        width: 195,
        height: 46,
        borderRadius: 30,
        backgroundColor: '#dadada',
        marginTop: 20,
        paddingTop: '2%'
      },
      buttOffText: {
        color: 'grey',
        fontSize: 16,
        fontFamily: 'Josefin Sans',
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }
})