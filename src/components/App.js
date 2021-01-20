import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => 
      setListings(data)
    )
  },[])

  function handleDeletedListing(id){
    const updatedListings = listings.filter((listing)=> listing.id !== id )
    setListings(updatedListings)
  }

  const filteredListings = listings.filter( (listing) => 
    listing.description.toLowerCase().includes(search.toLowerCase()) 
  )


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={filteredListings} handleDeletedListing={handleDeletedListing} />
    </div>
  );
}

export default App;
