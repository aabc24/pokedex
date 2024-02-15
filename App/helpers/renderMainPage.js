import { HeaderIndex } from "../components/HeaderIndex.js";
import { GridList } from "../components/GridList.js";
import { Loader } from "../components/Loader.js";
import { PokemonCards } from "../components/PokemonCards.js";
import { ajax } from "./ajax.js";

export async function renderMainPage(props) {
  props.appendChild(HeaderIndex(true));
  props.appendChild(GridList());
  props.querySelector(".grid-list").appendChild(Loader());
  let allPokemonsData = [];

  await ajax({
    url: "https://pokeapi.co/api/v2/pokemon?limit=151",
    callback: (pokemonsData) => {
      allPokemonsData = pokemonsData;
      const itemString = PokemonCards(allPokemonsData);
      setTimeout(() => {
        props.querySelector(".grid-list").innerHTML = itemString;
        props.querySelector(".header-index input").disabled = false;
      }, 5000);
    },
  });

  props.querySelector("input").addEventListener("keyup", (e) => {
    const newPokemonsData = allPokemonsData.filter((pokemonData) => {
      return pokemonData.name.includes(e.target.value.toLowerCase());
    });
    const itemString = PokemonCards(newPokemonsData);
    props.querySelector(".grid-list").innerHTML = itemString
      ? itemString
      : `<div class="pokemon-no-found">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>The Pokémon you’re looking for was not found. Please try again.</p>
        </div>`;
  });
}
