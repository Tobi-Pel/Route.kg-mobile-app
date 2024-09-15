import { View , StyleSheet , Image, Text, TouchableHighlight, Linking } from 'react-native';
import CodeButton from '@/components/CodeButton';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
const busImage = require('../assets/images/Assets/bus.jpg')

export default function HomePage() {
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
        <CodeButton included={false}/>
        <Image source={busImage} style={styles.forImage}></Image>
        <Text style={styles.heading}>route.kg</Text>
        <Text style={styles.city}>г. Джалал Абад</Text>
        <View style={styles.butt}>
          <Link href="routes" style={styles.buttText}>
            Продолжить
          </Link>
        </View>
        <View style={styles.collectorOfImages}>
          <TouchableHighlight 
            onPress={() => Linking.openURL('https://www.instagram.com/code.01.kg/')}>
              <Image source={require('../assets/images/Assets/instagram.png')} style={styles.icons} />
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => Linking.openURL('https://wa.link/0siv3l')}>
              <Image source={require('../assets/images/Assets/whatsapp (1).png')} style={styles.icons} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Linking.openURL('https://t.me/codejalalabad')}>
              <Image source={require('../assets/images/Assets/telegram.png')} style={styles.icons} />
          </TouchableHighlight>
        </View>
      </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  forImage: {
    width: 156,
    height: 144,
    marginTop: '18%'
  },
  heading: {
    color: '#31375B',
    fontSize: 35,
    fontFamily: 'Josefin Sans'
  },
  city: {
    color: '#31375B',
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Josefin Sans'
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
  collectorOfImages: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row'
  },
  icons: {
    width: 48,
    height: 48
  }
})