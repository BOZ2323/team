/*jshint esversion: 8 */ 
import React, {useState, useEffect} from 'react';
import './App.css';
import db from './DB.json';
import MitarbeiterListe from './MitarbeiterListe';


function App() {

  const [liste, setListe] = useState([]);
  const [menge, setMenge] = useState([]);

  useEffect(()=>{
    getMitarbeiterListe();
  }, [liste]);
  console.log(liste);

  const getMitarbeiterListe = async () => {
      let data = await db;
      console.log(data);
      setListe(data);
      console.log(data);
      console.log(liste);
  }

  const updateSendungsmenge = async (e) => {
    await setMenge(e.target.value)
  }
  

  return (
    <div className="App">
      <h1>Das kannst Du!!</h1>
      <MitarbeiterListe getMitarbeiterListe={getMitarbeiterListe} liste={liste} updateSendungsmenge={updateSendungsmenge}/>
    </div>
  );
}

export default App;
