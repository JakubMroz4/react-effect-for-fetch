import React from "react";
import { useState, useEffect } from "react";

function FavouriteSlipItem({ url, id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url + "/" + id)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <section className="adivce-slip"></section>;
  }

  return <li>{data.slip.advice}</li>;
}

export default FavouriteSlipItem;
