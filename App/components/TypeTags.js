export function TypeTags(props) {
  const $typeTags = document.createElement("div");
  $typeTags.classList.add("types-wrapper");
  $typeTags.innerHTML = ` 
  ${props
    .map(
      (type) =>
        `<p style="background-color: var(--${type.type.name})">${type.type.name}</p>`
    )
    .join("")}
  `;

  return $typeTags;
}
