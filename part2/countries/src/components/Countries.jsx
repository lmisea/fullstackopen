import Country from './Country'
import CountryInfo from './CountryInfo'

const Countries = ({ countries, setCountries }) => {
  if (!countries) {
    return null
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    return countries.map((country) => (
      <Country
        key={country.name.common}
        country={country}
        setCountries={setCountries}
      />
    ))
  } else if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />
  }
}

export default Countries
