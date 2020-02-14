import React from "react";
import "./StarWars.css";

const StarWarsCharacter = ({
  name,
  birthYear,
  gender,
  height,
  mass,
  eyeColor,
  hairColor,
  skinColor,
  change,
  url,
  select
}) => {
    const style = {
        display: select.includes(url) ?'block':'none',
    }
  return (
    <div className="character" onClick={() => change(url)} >
      <div className='character-name'>
      <h2>{name}</h2>
      </div>
      <div className="character-details" style={style}>
        {
          birthYear !== 'n/a' && birthYear !== 'unknown' ?
          <p><b>Birth Year:</b> {birthYear}</p> : null
        }
        {
          gender !== 'n/a' && gender !== 'none' ? 
          <p><b>Gender:</b> {gender}</p> : null 
        }
        {
          hairColor !== 'n/a' && hairColor !== 'none' ?
          <p><b>Hair Color:</b> {hairColor}</p> : null
        }
        <p><b>Height:</b> {height}</p>
        <p><b>Mass:</b> {mass}</p>
        <p><b>Eye Color:</b> {eyeColor}</p>
        <p><b>Skin Color:</b> {skinColor}</p>
      </div>
    </div>
  );
};
export default StarWarsCharacter;