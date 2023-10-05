import * as Location from 'expo-location';
class LocationService {
  static async getCurrentPosition() {
    try {
      const permissions = await Location.requestForegroundPermissionsAsync()
      const { status } = permissions || {};
      if (status !== 'granted') {
        console.warn('sem permissão')
        return
      }
      const location = await Location.getCurrentPositionAsync({});
      const formatedLocation = {
        latitude: location?.coords?.latitude || 0,
        longitude: location?.coords?.longitude || 0
      }

      return formatedLocation
    } catch (err) {
      console.log(err)
    }
    // const position = {
    //   latitude: 0,
    //   longitude: 0
    // }

    // return position
  }
}

export default LocationService
