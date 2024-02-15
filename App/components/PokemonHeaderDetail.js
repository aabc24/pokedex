import { colorByType } from "../helpers/colorByType.js";

export function PokemonHeaderDetail(props) {
  const { types, name, id } = props;
  const typeColor = colorByType(types[0].type.name);

  const $pokemonHeaderDetail = document.createElement("header");
  $pokemonHeaderDetail.classList.add("pokemon-header-detail");
  $pokemonHeaderDetail.style.backgroundColor = typeColor;
  $pokemonHeaderDetail.innerHTML = `
    <div class="custom-wrapper">
      <a href="#main" title="Return to the main page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
       </a>
      <p>#${id >= 100 ? id : id < 10 ? "00" + id : "0" + id}</p>
    </div>

    <div class="img-wrapper">
      <a href="#pokemon/${id - 1}/" ${
    id == 1 ? "class='hidden'" : ""
  } title="Previous Pokémon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      </a>
      <div>
        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="${name}">
        <h3>${name}</h3>
      </div>
      <a href="#pokemon/${id + 1}/" ${
    id == 151 ? "class='hidden'" : ""
  } title="Next Pokémon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
      </a>
    </div>
  `;

  return $pokemonHeaderDetail;
}
