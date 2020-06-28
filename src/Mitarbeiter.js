import React, { useState } from "react";

const Mitarbeiter = ({ mitarbeiter }) => {
  const [menge, setMenge] = useState(0);

  const updateSendungsmenge = (e) => {
    setMenge(e.target.value);
  };
  console.log("menge:", menge);

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="mitarbeiterCard">
      <h1> {mitarbeiter.Vorname} {mitarbeiter.Nachname} </h1> <p> Anschrift: </p>
      <p className="cardContent">
        {mitarbeiter.Anschrift.Strasse} {mitarbeiter.Anschrift.Hausnummer}
      </p>
      <p>
        {mitarbeiter.Anschrift.PLZ} {mitarbeiter.Anschrift.Stadt}
      </p>
      <p> Personalnummer: {mitarbeiter.Personalnummer} </p> <p> Zustellmittel: {mitarbeiter.Zustellmittel} </p>
      <form onSubmit={updateSendungsmenge}>
        <label htmlFor="Sendungsmenge"> Sendungsmenge: </label>
        <input
          type="number"
          value={menge}
          onFocus={handleFocus}
          id="Sendungsmenge"
          name="Sendungsmenge"
          min="1"
          max="1000"
          onChange={updateSendungsmenge}
        ></input>
      </form>
    </div>
  );
};
export default Mitarbeiter;
