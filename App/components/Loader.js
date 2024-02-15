export function Loader() {
  const $loader = document.createElement("div");
  $loader.classList.add("loader");
  $loader.innerHTML = `
    <img src="App/assets/img/spinning-circles.svg" width="85" height="85" alt="Cargando">
  `;

  return $loader;
}