function NavBar({
  Suivant,
  Precedent,
  pokemonIndex,
  setpokemonIndex,
  pokemonList,
}) {
  Precedent = () => {
    if (pokemonIndex > 0) {
      setpokemonIndex(pokemonIndex - 1);
    }
  };
  Suivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setpokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <>
      <div className="btn">
        <button className="btns" type="button" onClick={Suivant}>
          Suivant
        </button>
        <button className="btnp" type="button" onClick={Precedent}>
          Précédent
        </button>
      </div>
      <div>NavBar</div>
    </>
  );
}

export default NavBar;
