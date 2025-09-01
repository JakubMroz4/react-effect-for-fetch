import React from "react";
import { useEffect } from "react";
import FavouriteSlipItem from "./FavouriteSlipItem";

function FavouriteSlipsList({ url, favourites }) {
  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((item, index) => (
          <FavouriteSlipItem key={index} url={url} id={item} />
        ))}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;
