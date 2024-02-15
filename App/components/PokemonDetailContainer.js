import { TypeTags } from "./TypeTags.js";
import { CreatureAttributes } from "./CreatureAttributes.js";
import { StatPanel } from "./StatPanel.js";
import { colorByType } from "../helpers/colorByType.js";

export function PokemonDetailContainer(props) {
  const { types, height, weight, abilities, stats } = props;
  const typeColor = colorByType(types[0].type.name);

  const $pokemonDetailContainer = document.createElement("div");
  $pokemonDetailContainer.classList.add("pokemon-detail-container");
  $pokemonDetailContainer.appendChild(TypeTags(types));
  $pokemonDetailContainer.appendChild(
    CreatureAttributes({ height, weight, abilities })
  );
  $pokemonDetailContainer.appendChild(StatPanel({ stats, typeColor }));

  return $pokemonDetailContainer;
}
