import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const apiUrl = "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact";
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
        <h2>Users Section</h2>
        <div className="scroll-container"></div>
      </section>
    );
  }

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList data={data} />
      </div>
    </section>
  );
}

export default UsersSection;
