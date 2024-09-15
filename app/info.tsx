import { StyleSheet, Text, View , ScrollView, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
const image1 = require('../assets/images/Assets/main.png');
const image2 = require('../assets/images/Assets/react.png');
const image3 = require('../assets/images/Assets/html.png');
const image4 = require('../assets/images/Assets/python.png');
const image5 = require('../assets/images/Assets/others.png');

export default function InfoScreen() {
    const [fontsLoaded] = useFonts({
        "Josefin Sans": require("../assets/fonts/JosefinSansBold.ttf")
      });

      const team = [
        {name: 'Бактыгуль Орозбаева' , info: 'Project Manager', image: image1},
        {name: 'Адилет Касымбаев', info: 'Team Lead - Front-end' , image: image1},
        {name: 'Бекболот Нурмаматов' , info: 'Mobile App Developer', image: image2},
        {name: 'Аяна Ташбаева', info: 'Junior - Front-end' , image: image2},
        {name: 'Арууке Капарова' , info: 'Junior - Front-end' , image: image3},
        {name: 'Айтегин Абдумананов' , info: 'Junior - Back-end', image: image4},
        {name: 'Дастан Бакиев' , info: 'Junior - Back-end', image: image4},
        {name: 'Айгерим Борбугулова' , info: 'Junior - Back-end', image: image4},
        {name: 'Саид Мамаджанов', info: 'Картограф', image: image5},
        {name: 'Марлен Кочконбаев', info: 'Картограф', image: image5},
        {name: 'Жасур Сафаров', info: 'Картограф', image: image5},
        {name: 'Эрлан Асанов', info: 'Картограф', image: image5}
    ] 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text style={styles.headerH1}>CODE IT</Text>
        <Text style={styles.subHeading}>
         Мы молодая команда, которая предлагает спектр IT-услуг: от обучения и game dev до готовых бизнес-инструментов и разработки сайтов.
         Присоединяйтесь к нам и станьте частью нашего сообщества разработчиков!
        </Text>
        <View style={styles.collector1}>
            <Image 
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgBrZVbDYNAEEUHFCABCdRBJeCASqiD4gAJ4KB1gITWAXWAhNtLICnZB+zrJJP9GOYw2aeIAoAHo5ZUUNbjTyOxUNJBJ1zM4hvshIlZOB5IZwkBx7TiC4vKpMKdeE4pzLfxY8i9JQZ2dTV0OkoslNwN4viTBX1rLXNdSgwUFIxJEU82MdZ7YqE5E1fQd8OkFu6EcBXXMNNjXdTOkncSz/Cnzm3SLMteHC6Mr/hRnX6B9Rg/HbscxAcWtEmFSteDMtcjUrwS2w8KW+4HH/E6+nhm+8wAAAAASUVORK5CYII='}} 
                style={styles.icon}
            />
            <Text style={styles.phoneNumber}>+996 999 98 95 08</Text>
        </View>
        <View style={styles.collector2}>
            <Image 
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7VXRccIwDJV7DOBOUG/QjFAmKBu0K3QC6CbdoMcEyQbABIYJyAZGAhkUnzAi/PLufFLkp/cSO04AnrgXKaUvHPs0HpE0sp5TDCKGAI+hd869UjJRJgMYBHhseRB2nPeiphp0laae764HIxyMAC6jx+DRaMvXMwwNjjemBJybqgZIJmIgAY7nJlH3XJuiUIc9/5jPpA7Wj9raEq3ADrqZDk5LqeIFHsM7x/U1wgRuo8Ox4fwThm/Zh+DYUByahTK/KDie64PDaTGIFU4reI1SOxvU9mApBGNhuBF5o9TAYmBFNlib2OIp2wonljxaqnv3gDBX5ucFZ891P8ZgYKKIZ4TyyWoG2r+AGtt0Hd/c+5f5WU/b5B8Qn1tGgMuh0iA3mr60v/CEFQfAn7Ydj+pfsAAAAABJRU5ErkJggg=='}} 
                style={styles.icon}
            />
            <Text style={styles.address}>Джалал-Абад, Токтогула 47А</Text>
        </View>
        <Text style={styles.headerH2}>Наша команда</Text>
        <View style={styles.collector3}>
            {team.map(person => (
                <View style={styles.collector4}>
                    <Image 
                        source={person.image}
                        style={styles.teamImage}
                    />
                    <View>
                        <Text style={styles.teamName}>{person.name}</Text>
                        <Text style={styles.teamInfo}>{person.info}</Text>
                    </View>
                </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#31375B'
    },
    ScrollView: {
        backgroundColor: '#31375B',
    },
    headerH1: {
        color: '#fff',
        fontFamily: 'Josefin Sans',
        fontSize: 30,
        marginTop: 10
    },
    subHeading: {
        width: 320,
        color: '#fff',
        marginTop: 25,
        fontFamily: 'Josefin Sans',
        fontSize: 15,
        lineHeight: 22
    },
    icon: {
        width: 21,
        height: 21
    },
    collector1: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center'
    },
    phoneNumber: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Josefin Sans',
        margin: 17, 
        marginRight: 122
    },
    address: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Josefin Sans',
        margin: 17,
    },
    collector2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerH2: {
        color: '#fff',
        fontFamily: 'Josefin Sans',
        fontSize: 30,
        marginTop: 20
    },
    collector3: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 20,
        marginBottom: 40
    },
    teamImage: {
        width: 64,
        height: 64
    },
    teamName: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Josefin Sans'
    },
    collector4: {
        display: 'flex',
        flexDirection: 'row',
        gap: 14,
        marginRight: 80
    },
    teamInfo: {
        color: '#cbcbcb',
        fontSize: 15,
        fontFamily: 'Josefin Sans',
        marginTop: 6
    }
})