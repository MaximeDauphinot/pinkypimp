import React from "react";
import "./DisplayMembre.css";
import Radium from "radium";
import select from "../../../../../ressources/select.png";

const DisplayMembre = (props) => {
  let membre = null;

  if (props.member) {
    membre = (
      <div>
        {props.member.map((team, index) => {
          return (
            <div
              className="test"
              // onMouseOver={() => {
              //   document.getElementById("audio").play();
              // }}
              key={Math.random()}
              onClick={() => {
                props.open();
                props.index(index, team.categorie);
              }}
            >
              <p className="marginNom">{team.prenom}</p>
              <p className="marginPrenom">{team.nom}</p>
              <img id="select" className="select" src={select} alt="select" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="DisplayMembre">
      <div className="secondTitle">
        <p>{props.title}</p>
      </div>
      {membre}
    </div>
  );
};

export default Radium(DisplayMembre);
