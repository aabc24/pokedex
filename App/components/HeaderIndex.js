import { Title } from "./Title.js";
import { SearchField } from "./SearchField.js";

export function HeaderIndex(props) {
  const $headerIndex = document.createElement("header");
  $headerIndex.appendChild(Title());
  if (props) {
    $headerIndex.classList.add("header-index");
    $headerIndex.appendChild(SearchField());
  } else {
    $headerIndex.classList.add("header-not-found");
  }

  return $headerIndex;
}
