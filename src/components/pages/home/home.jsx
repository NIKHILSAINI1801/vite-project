import React from 'react';

const Home = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container">
      <h1>Welcome to my home page!</h1>
      <p>This is a basic home page.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;