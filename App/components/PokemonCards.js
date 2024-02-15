export function PokemonCards(props) {
  return props
    .map(
      (prop) => `
    <a href="#pokemon/${prop.url.split("/")[6]}/" title="Go to see ${
        prop.name
      }" class="card">
      <div class="card-img">
        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${
          prop.url.split("/")[6]
        }.svg" loading="lazy" alt="${prop.name}">
      </div>
      <div class="card-body">
        <span>Nº${
          prop.url.split("/")[6] >= 100
            ? prop.url.split("/")[6]
            : prop.url.split("/")[6] < 10
            ? "00" + prop.url.split("/")[6]
            : "0" + prop.url.split("/")[6]
        }</span>
        <h3>${prop.name}</h3>
      </div>
    </a>
  `
    )
    .join(" ");
}
