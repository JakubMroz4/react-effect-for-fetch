import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const apiUrl = "https://api.adviceslip.com/advice";

  const [favourites, setFavourites] = useState([]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        url={apiUrl}
        setFavourite={setFavourites}
        favourites={favourites}
      />
      <FavouriteSlipsList favourites={favourites} url={apiUrl} />
    </section>
  );
}

export default AdviceSection;
