/*jshint esversion: 8 */ 
import React, {useState, useEffect} from 'react';
import './App.css';
import db from './DB.json';
import MitarbeiterListe from './MitarbeiterListe';


function App() {

  const [liste, setListe] = useState([]);

  useEffect(()=>{
    getMitarbeiterListe();
  });
  console.log(liste);

  const getMitarbeiterListe = async () => {
      let data = await db;
      console.log(data);
      setListe(data);
      console.log(data);
      console.log(liste);
  }
  

  return (
    <div className="App">
      <h1>Das kannst Du!!</h1>
      <MitarbeiterListe getMitarbeiterListe={getMitarbeiterListe} liste={liste}/>
    </div>
  );
}

export default App;
