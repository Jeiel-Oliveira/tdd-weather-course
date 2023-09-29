import GetLocation from "react-native-get-location"
class LocationService {
  static async getCurrentPosition() {
    const position = GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(({latitude, longitude}) => ({latitude, longitude}) )

    return position
  }
}

export default LocationService