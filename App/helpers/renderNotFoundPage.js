import { HeaderIndex } from "../components/HeaderIndex.js";
import { GridList } from "../components/GridList.js";

export function renderNotFoundPage(props) {
  props.appendChild(HeaderIndex(false));
  props.appendChild(GridList());
  props.querySelector(".grid-list").innerHTML += `
    <div class="page-not-found">
      <i class="fa-solid fa-magnifying-glass"></i>
      <p>The page you are looking for was not found. Please return to the main page.</p>
    </div>
  `;
}
