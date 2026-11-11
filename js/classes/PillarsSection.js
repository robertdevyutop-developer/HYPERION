/** Core Pillars: three-column grid for the three pillars. */
class PillarsSection extends Component {
  template() {
    const { title, intro, items } = this.data;
    const columns = items
      .map(
        (item) => `
        <li class="pillars__item">
          <h3 class="pillars__word">${this.escape(item.word)}</h3>
          <p class="pillars__text">${this.escape(item.text)}</p>
        </li>`
      )
      .join("");

    return `
      <div class="container">
        <header class="section-head">
          <h2 class="section-title" id="pillars-title">${this.escape(title)}</h2>
          <p class="section-intro">${this.escape(intro)}</p>
        </header>
        <ul class="pillars__list">${columns}</ul>
      </div>`;
  }
}
