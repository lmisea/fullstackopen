const SearchField = ({ searchValue, setSearchValue, lookForCountries }) => {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
    lookForCountries(e.target.value)
  }

  return (
    <>
      <>
        find countries
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => {
            handleSearchChange(e)
          }}
        />
      </>
    </>
  )
}

export default SearchField
