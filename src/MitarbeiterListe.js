/*jshint esversion: 8 */ 
import React from 'react';

const MitarbeiterListe = ({liste, updateSendungsmenge, menge, getMitarbeiterListe}) => {
    const mitarbeiterliste = liste.length ? liste.map(listItem => {
        let uniqueId = Math.random();
        return (
            <div key={uniqueId}>    
            <h1>{listItem.Name}</h1>
            <p>{listItem.Anschrift.Strasse}{listItem.Anschrift.Hausnummer}</p>
            <p>{listItem.Anschrift.PLZ}{listItem.Anschrift.Stadt}</p>
            <p>{listItem.Personalnummer}</p>
            <p>{listItem.Zustellmittel}</p>
            <form onSubmit={getMitarbeiterListe} className="search-form">
                <label htmlFor="Sendungsmenge">Sendungsmenge:</label>
                <input type="number" id="Sendungsmenge" name="Sendungsmenge" min="1" max="1000" onChange={updateSendungsmenge}></input>
                {/* <input type="submit"></input> */}
            </form>
            </div>
        )
    }): null
    return (
        <div>
            {mitarbeiterliste}
        </div>
    )
}

export default MitarbeiterListe
