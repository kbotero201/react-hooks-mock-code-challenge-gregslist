import React, {useState} from "react";

function Search({search, setSearch}) {


  const[writtenSearch, setWrittenSearch] = useState("")


  function handleSubmit(e) {
    e.preventDefault() 
    setSearch(writtenSearch)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={writtenSearch}
        onChange={(e) => setWrittenSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

