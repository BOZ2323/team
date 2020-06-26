/*jshint esversion: 8 */ 
import React from 'react';

const MitarbeiterListe = ({liste}) => {
    const mitarbeiterliste = liste.length ? liste.map(listItem => {
        let uniqueId = Math.random();
        return (
            <div>    
            <h1 key={uniqueId}>{listItem.Name}</h1>
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
