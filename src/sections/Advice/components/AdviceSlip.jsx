import React from 'react'
import { useState, useEffect } from 'react'

function AdviceSlip({url, setFavourite, favourites}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleFetch()
      }, []);

      const handleFetch = () => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((result) => {
            setData(result);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Fetch error:", error);
            setLoading(false);
        });}

const AddFavourite = (favId) => {
    if (favourites.includes(favId)){
        return;
    }
    setFavourite((prevIds) => [...prevIds, favId]);
}

if (loading){
        return <section className="adivce-slip">
  </section>
    }

  return (
    <section className="adivce-slip">
    <h3>Some Advice</h3>
    <p>{data.slip.advice}</p>
    <button onClick={handleFetch}>Get More Advice</button>
    <button onClick={() => AddFavourite(data.slip.id)}>Save to Favourties</button>
  </section>
  )
}

export default AdviceSlip