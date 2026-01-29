import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      

      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <h1>Programming Jokes</h1>

      {isLoading ? (
        <div className="message">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <p>{joke}</p>
      )}

      <button onClick={fetchJoke}>Get a New Joke</button>
    </div>
  );
}

export default App;