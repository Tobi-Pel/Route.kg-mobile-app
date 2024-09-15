import { Pressable, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';

interface CardProps {
  text: string,
  clicked?: boolean,
  type: string,
  setCurrent?: any,
  color: string,
  id: string
}

export default function Card({text, clicked=false, setCurrent=() => {}, type, id , color, ...props}: CardProps) {
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("../assets/fonts/JosefinSansBold.ttf")
  })

  const clickHandler = () => {
    setCurrent(id);
  }

  const styles = StyleSheet.create({
    card: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      width: 74,
      height: 76,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 6,
      paddingBottom: 10,
      borderWidth: 4,
      borderColor: color,
      borderRadius: 15,
      cursor: 'pointer'
    },
    cardNumber: {
      cursor: 'pointer',
      fontFamily: 'Josefin Sans',
      fontSize: 40,
      color: color
    },
    clickedCard: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      width: 74,
      height: 76,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 6,
      paddingBottom: 10,
      borderWidth: 4,
      borderColor: color,
      borderRadius: 15,
      cursor: 'pointer',
      transform: 'scale(1.1)'
    },
    type: {
      fontSize: 12,
      margin: 0,
      fontFamily: 'Josefin Sans',
      color: color
  }
  })

  return (
    <Pressable style={clicked ? styles.clickedCard : styles.card} onPress={clickHandler}>
      <Text style={styles.cardNumber}>{text}</Text>
      <Text style={styles.type}>{type}</Text>
    </Pressable>
  )
}