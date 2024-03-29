import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import SearchField from './components/SearchField'
import countriesService from './services/countries'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    countriesService.getAll().then((returnedCountries) => {
      setAllCountries(returnedCountries)
    })
  }, [])

  const lookForCountries = (searchValue) => {
    if (searchValue) {
      const countries = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      )
      setCountries(countries)
    } else {
      setCountries(null)
    }
  }

  return (
    <>
      <SearchField
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        lookForCountries={lookForCountries}
      />
      <Countries countries={countries} />
    </>
  )
}

export default App
