import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const apiUrl = "https://boolean-uk-api-server.fly.dev/art";
  const imgUrl = "https://boolean-uk-api-server.fly.dev";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
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

  /*
  useEffect(() => {
    console.log(data);
  }, [data])
  */

  if (loading) {
    return (
      <section>
        <h2>Arts Section</h2>
        <div className="scroll-container"></div>
      </section>
    );
  }

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList data={data} url={imgUrl} />
      </div>
    </section>
  );
}

export default ArtsSection;
