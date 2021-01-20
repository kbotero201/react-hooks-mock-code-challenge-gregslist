import React, {useState} from "react";

function ListingCard({listing: {description, image, location, id}, handleDeletedListing}) {

  const [isFavorite, setIsFavorite] = useState(true)

  function handleClickFavorite(){
    setIsFavorite((isFavorite) => setIsFavorite(!isFavorite) )
  }

  function handleClickDelete(){
    
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
      .then(resp=> resp.json())
      .then(data => {
        handleDeletedListing(id)
      })

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClickFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClickFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleClickDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;



