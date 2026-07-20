function SearchBar({searchText,setSearchText}) {
    console.log(searchText);
  return <div>
    <input type="text" id="searchBar" value={searchText} onChange={(event)=>setSearchText(event.target.value)} placeholder="Search"></input> 
  </div>;
}
export default SearchBar;