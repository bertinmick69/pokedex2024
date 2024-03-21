import "./App.css";
import PokemonCard from "./components/pokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const Precedent = () => {
    if (pokemonIndex > 0) {
      setpokemonIndex(pokemonIndex - 1);
    }
  };
  const Suivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setpokemonIndex(pokemonIndex + 1);
    }
  };

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div className="btn">
        <button className="btns" onClick={Suivant}>
          Suivant
        </button>
        <button className="btnp" onClick={Precedent}>
          Précédent
        </button>
      </div>
    </>
  );
}

export default App;
