/*jshint esversion: 8 */

import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./DB.json";
import Mitarbeiter from "./Mitarbeiter";

function App() {
  const [liste, setListe] = useState([]);

  useEffect(() => {
    getMitarbeiterListe();
  }, []);

  const getMitarbeiterListe = () => {
    let data = db;
    console.log(data);
    setListe(data);
    console.log("data:", data);
  };

  if (liste.length === 0) {
    return null;
  }
  const mitarbeiterliste = liste.map((mitarbeiter) => {
    return <Mitarbeiter mitarbeiter={mitarbeiter} key={mitarbeiter.Personalnummer} />;
  });

  return <div className="App">{mitarbeiterliste}</div>;
}

export default App;
