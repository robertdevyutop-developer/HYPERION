/** Home: top banner with the three-word tagline and the logo. */
class Hero extends Component {
  template() {
    const { name, logo, tagline, intro } = this.data;
    // Each sentence of the tagline gets its own line.
    const lines = tagline
      .split(/(?<=\.)\s+/)
      .map((line) => `<span class="hero__word">${this.escape(line)}</span>`)
      .join("");

    return `
      <div class="hero__shapes" aria-hidden="true">
        <span class="hero__shape hero__shape--a"></span>
        <span class="hero__shape hero__shape--b"></span>
      </div>
      <div class="container hero__inner">
        <div class="hero__copy">
          <h1 class="hero__title">${lines}</h1>
          <p class="hero__intro">${this.escape(intro)}</p>
          <div class="hero__actions">
            <a class="button button--solid" href="#pillars">Core Pillars</a>
            <a class="button button--line" href="#philosophy">Our Philosophy</a>
          </div>
        </div>
        <div class="hero__mark">
          <img src="${this.escape(logo)}" alt="${this.escape(name)} logo" width="350" height="136">
        </div>
      </div>`;
  }
}
