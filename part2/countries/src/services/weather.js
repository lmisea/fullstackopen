import axios from 'axios'

const geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q='
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat='
const apiKey = import.meta.env.VITE_API_KEY

const getLocation = (city) => {
  return axios
    .get(`${geoURL}${city}&limit=1&appid=${apiKey}`)
    .then((response) => response.data)
}

const getWeather = (lat, lon) => {
  return axios
    .get(`${weatherURL}${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then((response) => response.data)
}

export default { getLocation, getWeather }
