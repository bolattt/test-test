import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [cocktails, setCocktails ] = useState(null)
  
 function getData() { 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
  fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
    .then(response => response.json())
    .then(response => { 
      console.log(response)
      setCocktails(response.drinks)
    })
    .catch(err => console.error(err));
 }
  return (
    <div className="App">
      <button onClick={getData}>get drinks</button>
      <ul>
      {
        cocktails && ( 
          cocktails.map(cocktail => (
            <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
          ))
        ) 
      }
      </ul>
 
    
    </div>
  );
}

export default App;
