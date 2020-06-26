/*jshint esversion: 8 */ 
import React from 'react';

const MitarbeiterListe = ({liste, updateSendungsmenge}) => {
    const mitarbeiterliste = liste.length ? liste.map(listItem => {
        let uniqueId = Math.random();
        return (
            <div key={uniqueId}>    
            <h1>{listItem.Name}</h1>
            <p>{listItem.Anschrift.Strasse}{listItem.Anschrift.Hausnummer}</p>
            <p>{listItem.Anschrift.PLZ}{listItem.Anschrift.Stadt}</p>
            <p>{listItem.Personalnummer}</p>
            <p>{listItem.Zustellmittel}</p>
            <form >
                <input type="text" onChange={updateSendungsmenge} placeholder="Sendungsmenge"/>
                <button className="submit-button" type="submit">send</button>
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
