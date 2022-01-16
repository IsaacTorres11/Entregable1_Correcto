
import { useState } from 'react';
import './App.css';

// import json
import quotes from "./quotes.json";
// Componentes 
import QuoteBox  from './Componentes/QuoteBox ';

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];



function App() {

  //useState
  const [frase, setFrase] = useState(quotes[getNumber(quotes.length)]);
  
  const background = colors[getNumber(colors.length)];

  document.body.style = `background: ${background}`;

  const cambiarFrase = () => {
    const index = getNumber(quotes.length);
    setFrase(quotes[index]);
  };

  return (
    <div className="App">
      <QuoteBox  
      frase ={frase.quote}
      autor ={frase.author}
      funcionCambiar ={cambiarFrase}
      background ={background}
      />
    </div>
  );
}
const getNumber = (max) => Math.floor(Math.random() * max);

export default App;
