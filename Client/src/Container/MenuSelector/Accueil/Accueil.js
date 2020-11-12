import React, { useState, useEffect } from "react";
import "./Accueil.css";
import "animate.css/animate.min.css";
import logo from "../../../ressources/logo-blanc.png";
import ScrollAnimation from "react-animate-on-scroll";

const accueil = () => {
  const [text, setText] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/front/accueil", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((text) => {
        setText(text);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="title_logo">
      <ScrollAnimation animateIn="zoomIn" duration={2}>
        <img src={logo} alt="logoAccueil" className="logoAccueil" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="slideInRight" duration={2}>
        <div className="TextAccueil">
          <p>{text.text}</p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default accueil;
