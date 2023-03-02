import React, { useState } from 'react';
import './App.css';

const quotes = [
  {
    text: 'Cae siete veces y levántate ocho.',
    author: 'Japanese Proverb',
    background: '#ffe4c4',
  },
  {
    text: 'Pocas cosas pueden ayudar más a una persona que responsabilizarla y hacerle saber que usted confía en ella.',
    author: 'Booker T. Washington',
    background: '#f0e67c',
  },
  {
    text: 'Vaya con confianza en dirección de sus sueños. Vive la vida que has imaginado.',
    author: 'Henry David Thoreau',
    background: '#87cefa',
  },
  {
    text: 'Cuando una puerta de la felicidad se cierra, otra se abre, pero muchas veces miramos tanto la puerta cerrada que no vemos la que se ha abierto para nosotros.',
    author: 'Helen Keller',
    background: '#D7FF33',
  },
];
function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleClick = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  return (
    <div className="App" style={{ backgroundColor: quote.background }}>
      <h1>{quote.text}</h1>
      <p>{quote.author}</p>
      <p>{}</p>
      <button className='px-2 py-1 bg-gray-100 hover:bg-red-500 hover:text-black rounded' onClick={handleClick} >
        Siguiente
      </button>
    </div>
  );
}

export default App;
