import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";

function Toolbar({ searchText, setSearchText, filter, setFilter }) {
  return (
    <div className="toolbar">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}
export default Toolbar;