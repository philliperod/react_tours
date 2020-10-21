import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;

// we'll destructured in the component's parameters with each prop that is listed in the array
// structured your jsx to display your tour card
// to create an interaction for your paragraph to minimize and expand the text, you will need to create an useState hook and a ternary operator within the html tag
// the default state value will be a boolean value set as false
// you'll create a ternary conditional in-between the <p> tags that has two arguments of either showing all of the text or a substring amount of the text (have to use template literal for substring function)
// you'll create a button that takes in the state function setReadMore and toggles the boolean value between truth and false
// create a button with another ternary conditional in-between its tag that has two arguments that toggles between 'show less' and 'read more' when clicked
