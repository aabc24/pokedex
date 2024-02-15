import { PokemonHeaderDetail } from "../components/PokemonHeaderDetail.js";
import { PokemonDetailContainer } from "../components/PokemonDetailContainer.js";
import { ajax } from "./ajax.js";

export async function renderPokemonPage(props, hash) {
  props.closest("body").style.backgroundColor = "#fff";
  await ajax({
    url: `https://pokeapi.co/api/v2/${hash}`,
    callback: (pokemonData) => {
      props.appendChild(PokemonHeaderDetail(pokemonData));
      props.appendChild(PokemonDetailContainer(pokemonData));
    },
  });
}
