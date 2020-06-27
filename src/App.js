/*jshint esversion: 8 */

import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./DB.json";
import Mitarbeiter from "./Mitarbeiter";

function App() {
  const [liste, setListe] = useState([]);

  useEffect(() => {
    getMitarbeiterListe();
  });

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
    let uniqueId = Math.random();
    return <Mitarbeiter mitarbeiter={mitarbeiter} key={uniqueId} />;
  });

  return <div className="App">{mitarbeiterliste}</div>;
}

export default App;
