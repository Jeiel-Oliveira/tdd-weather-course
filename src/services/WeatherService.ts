import { WeatherType, nullWeather } from "../types/Weather";
import axios, { AxiosResponse } from 'axios'
import { CurrentWeatherRawResponseDto } from "./dto/weather-service.dto";

export default class WeatherService {
  static async fetchCurrentWeather(lat: number, lon: number): Promise<WeatherType> {
    return axios.get<CurrentWeatherRawResponseDto>('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: '020837a855022d4dfd82da7bdfb4e170',
        units: 'metric'
      }
    }).then(WeatherService.formatCurrentWeatherResponse)
  }

  private static async formatCurrentWeatherResponse(response: AxiosResponse<CurrentWeatherRawResponseDto>) {
    const {data} = response
    const weather = data.weather[0]

    return {
      temperature: data.main.temp,
      windspeed: data.wind.speed,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      icon: weather?.icon ? `http://openweathermap.org/img/wn/${weather.icon}@4x.png` : null,
      city: data.name,
      description: weather?.description ?? null
    }
  }
}
