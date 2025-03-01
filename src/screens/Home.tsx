import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants';
import moment from 'moment';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCoordinates from '../components/WeatherCoordinates';

export default function Home() {
  const now = moment(new Date())
  return (
    <LinearGradient 
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]} 
      testID='home'
      style={styles.container}
    >
      <View style={styles.title}>
        <Text testID='date' style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent/>
      <Text style={styles.divider} testID='app-divider'>
        Or
      </Text>
      <WeatherCoordinates/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
  },
  title: {
    justifyContent: 'flex-end'
  },
  date: {
    color: Colors.GRAY
  },
  day: {
    color: Colors.WHITE,
    fontSize: 21
  },
  divider: {
    color: Colors.WHITE,
    textAlign: 'center'
  }
})
