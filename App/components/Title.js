export function Title() {
  const $title = document.createElement("a");
  $title.classList.add("title");
  $title.href = "#main";
  $title.innerHTML = `
    <h1>
      <img src="App/assets/img/pokedex.svg" width="18" height="18.16" alt="Pokédex">
      <span>Pokédex</span>
    </h1>
  `;

  return $title;
}
