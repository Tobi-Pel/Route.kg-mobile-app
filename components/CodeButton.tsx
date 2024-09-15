import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const busImage = require('../assets/images/Assets/bus.jpg')

export default function CodeButton({included = true , ...props}) {
  return (
    <View style={styles.collector1}>
        <Link href="info" style={styles.buttLink}>
            <View style={styles.button}>
                <Text style={styles.innerText}>CO DE IT</Text>
            </View>
        </Link>
        
        {included ? <Image source={busImage} style={styles.forImage}></Image> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    collector1: {
        width: '100%',
        height: 140,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        width: 49,
        height: 87,
        borderRadius: 10,
        backgroundColor: '#31375B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        color: '#FFFFFF',
        fontFamily: 'Josefin Sans',
        fontSize: 23,
        lineHeight: 23,
        textAlign: 'center',
        fontWeight: '700',
        width: '66%',
        letterSpacing: 2
    },
    forImage: {
        width: 162,
        height: 110,
        alignSelf: 'center'
    },
    buttLink: {
        position: 'absolute',
        left: '6%'
    }
})