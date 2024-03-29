const Country = ({ country, setCountries }) => {
  return (
    <p>
      {country.name.common}
      <button onClick={() => setCountries([country])}>show</button>
    </p>
  )
}

export default Country
