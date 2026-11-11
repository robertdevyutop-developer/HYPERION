/** Our Philosophy: numbered three-point list followed by a word of encouragement. */
class PhilosophySection extends Component {
  template() {
    const { title, intro, points, encouragement } = this.data;
    const items = points
      .map(
        (text, index) => `
        <li class="philosophy__point">
          <span class="philosophy__num" aria-hidden="true">${index + 1}</span>
          <p>${this.escape(text)}</p>
        </li>`
      )
      .join("");

    return `
      <div class="container philosophy__inner">
        <header class="philosophy__head">
          <h2 class="section-title" id="philosophy-title">${this.escape(title)}</h2>
          <p class="section-intro">${this.escape(intro)}</p>
        </header>
        <ol class="philosophy__points">${items}</ol>
      </div>
      <div class="container">
        <p class="philosophy__encourage">${this.escape(encouragement)}</p>
      </div>`;
  }
}
