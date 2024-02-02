/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = ".com";
  let namesdoamins = [];

  let nameDomainGenerator = (pronombre, adjetivo, sustantivo) => {
    for (let pronombre = 0; pronombre < pronoun.length; pronombre++) {
      for (let adjetivo = 0; adjetivo < adj.length; adjetivo++) {
        for (let sustantivo = 0; sustantivo < noun.length; sustantivo++) {
          namesdoamins.push(
            pronoun[pronombre] + adj[adjetivo] + noun[sustantivo] + extension
          );
        }
      }
    }

    return namesdoamins;
  };

  nameDomainGenerator(pronoun, adj, noun);

  console.log(namesdoamins);
};

// :D
