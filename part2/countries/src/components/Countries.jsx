import Country from './Country'

const Countries = ({ countries }) => {
  if (!countries) {
    return null
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    return countries.map((country) => (
      <p key={country.name.common}>{country.name.common}</p>
    ))
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />
  }
}

export default Countries
