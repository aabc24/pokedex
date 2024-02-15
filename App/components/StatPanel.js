export function StatPanel(props) {
  const $statPanel = document.createElement("div");
  $statPanel.classList.add("skills-wrapper");
  const { stats, typeColor } = props;
  $statPanel.innerHTML = `
      <h4>Base statistics</h4>
      ${stats
        .map(
          (stat) => `<div class="skills-wrap">
                        <p><span>${stat.stat.name}</span>${stat.base_stat}</p>
                        <div class="progress" style="--wth:${stat.base_stat}%; --type:${typeColor}"></div>
                      </div>`
        )
        .join("")}
  `;

  return $statPanel;
}
