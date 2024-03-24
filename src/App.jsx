import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/pokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

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

      <div>
        <NavBar
          pokemonIndex={pokemonIndex}
          setpokemonIndex={setpokemonIndex}
          pokemonList={pokemonList}
        />
      </div>
    </>
  );
}

export default App;
