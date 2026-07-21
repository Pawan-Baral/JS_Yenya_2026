function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="🔍 Search tasks..."
      />
    </div>
  );
}

export default SearchBar;