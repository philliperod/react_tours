import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
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

// created a try..catch script using a fetch function that grabs an array of objects from an url and stores it into variable response
// then parse that array and store it into tours variable
// set state value loading to false
// change the state value of tours with the json data
// if an error is caught from the data, then set setLoading to false and console.log error
// useEffect will run fetchTours function after render
// what will be return onto the page is the Tour component since condition set is not true because the fetchTours sets setLoading to false when ran
