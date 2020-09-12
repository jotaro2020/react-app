import React from "react";
import "./card.styles.css"

export const Card=({monster,key})=>(
    <div className={'card-container'}>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=210x210`} alt="key"/>
        <h2 key={key}>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
)