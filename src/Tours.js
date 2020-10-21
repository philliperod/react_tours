import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

// now that you have obtained the data from the url and parsed it into json, you'll take that state value and use the map() method to iterate over the array
// in the map() method, you'll return the Tour component which you set the key attribute to the id in the array and use the spread operator to expand it
