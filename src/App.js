import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

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
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

// now adding a functionality to remove individual tours when clicked on "not interested"
// also adding another functionality to refresh the whole list again once all is cleared
// you'll setup this removeTour function in the App.js because this is where you have your tours data that was fetched from a url
// and you need to be able to pass this removeTour function all the way to the Tour component because that is where you will need the id
// that removeTour function will be looking for that destructured id and so it knows which tour to remove
// you'll pass the id in the parameter of that removeTour function
// you'll create a variable that has a filter() method
// if the tour id does not match then store it in the variable newTours
// if the tour id matches then that is the tour that is going to be removed
// next question: how to get removeTour function down to the Tour component?
// you just have to pass it as a prop (removeTour={removeTour})
