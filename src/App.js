import React, { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
// import "./App.css";
const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      console.log(tours)
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  };


  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
