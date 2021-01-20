import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeletedListing}) {

  const cards = listings.map((listing)=>(
    <ListingCard key={listing.id} listing={listing} handleDeletedListing={handleDeletedListing} />
  ))

  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;

