import SearchIcon from "../../common/assets/imgs/search.svg";
import "./styles.scss";

function PokemonPage() {
  return (
    <main className="pokemonPageMainContainer">
      <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
      <div className="searchInput">
        <input type="search" placeholder="Pesquisar pokemon" />
        <button>
          <img src={SearchIcon} alt="lupaIcon" />
        </button>
      </div>
      <section>{/*<PokeCard />*/}</section>
    </main>
  );
}

export default PokemonPage;
