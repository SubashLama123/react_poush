const Search = ({ setSearch }) => {
  return (
    <div>

      <form>

        <input onChange={(e) => {
          setSearch(e.target.value);
        }} type="text" placeholder="search Movie" />
      </form>

    </div>
  )
}
export default Search