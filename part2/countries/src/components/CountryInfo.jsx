import { useEffect, useState } from 'react'
import weatherService from '../services/weather'

const CountryInfo = ({ country }) => {
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
  const [weather, setWeather] = useState(null)
  const [weatherIcon, setWeatherIcon] = useState(null)

  useEffect(() => {
    weatherService
      .getLocation(country.capital)
      .then((capitalLocation) => {
        weatherService
          .getWeather(capitalLocation[0].lat, capitalLocation[0].lon)
          .then((capitalWeather) => {
            setTemp(capitalWeather.main.temp)
            setWind(capitalWeather.wind.speed)
            setWeather(capitalWeather.weather[0].description)
            setWeatherIcon(
              `http://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png`
            )
          })
          .catch((error) => {
            console.log('error', error)
          })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [country.capital])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name} width="200" />
      <h2>Weather in {country.capital}</h2>
      <p>temperature {temp} Celsius</p>
      <p>weather {weather}</p>
      <img src={weatherIcon} alt={weather} />
      <p>wind {wind} m/s</p>
    </div>
  )
}

export default CountryInfo
