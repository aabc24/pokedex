import { renderMainPage } from "../helpers/renderMainPage.js";
import { renderPokemonPage } from "../helpers/renderPokemonPage.js";
import { renderNotFoundPage } from "../helpers/renderNotFoundPage.js";

export async function Router(props) {
  props.closest("body").style.backgroundColor = "#dc0a2d";
  props.innerHTML = null;
  let { hash } = location;
  let id = hash.split("/")[1];

  if (!hash || hash === "#main") {
    await renderMainPage(props);
  } else if (
    hash.includes("pokemon/") &&
    hash.length <= 13 &&
    id >= 1 &&
    id <= 151
  ) {
    await renderPokemonPage(props, hash.slice(1));
  } else {
    renderNotFoundPage(props);
  }
}
