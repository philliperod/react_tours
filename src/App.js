import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState('');

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;

// start by having two state values
// loading default value is true meaning that we will see the Loading component
// next, work on the return
// in the condition, if loading is true it will return the jsx containing the Loading component
// if false, it will run the default argument which is the Tours component
