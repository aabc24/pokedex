export function CreatureAttributes(props) {
  const $creatureAttributes = document.createElement("div");
  $creatureAttributes.classList.add("pokemon-detail-wrapper");
  const { height, weight, abilities } = props;
  $creatureAttributes.innerHTML = `
    <h4>About</h4>
    <div class="pokemon-detail-wrap">
      <div class="pokemon-detail">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0H208c26.5 0 48 21.5 48 48V96H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48z"/></svg>
        <p>${height / 10} m</p>
      </div>
      <p>Height</p>
    </div>

    <div class="pokemon-detail-wrap">
      <div class="pokemon-detail">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z"/></svg>
        <p>${weight / 10} kg</p>
      </div>
      <p>Weight</p>
    </div>

    <div class="pokemon-detail-wrap">
      <div class="pokemon-detail">
        ${abilities
          .map((abilitie) => `<p class="abilitie">${abilitie.ability.name}</p>`)
          .join("")}
      </div>
      <p>Abilities</p>
    </div>
  `;

  return $creatureAttributes;
}
