export type WeatherType = {
  temperature: number
  windspeed: number
  humidity: number
  pressure: number
  icon: string | null
  description: string | null
  city: string
}

export const nullWeather: WeatherType = {
  temperature: 0,
  windspeed: 0,
  humidity: 0,
  pressure: 0,
  icon: null,
  description: null,
  city: ''
}