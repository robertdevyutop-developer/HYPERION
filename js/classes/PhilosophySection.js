/** Our Philosophy: three-point list followed by a word of encouragement. */
class PhilosophySection extends Component {
  template() {
    const { title, intro, points, encouragement } = this.data;
    const items = points
      .map(
        (point) => `
        <li class="philosophy__point">
          <h3 class="philosophy__heading">${this.escape(point.heading)}</h3>
          <p>${this.escape(point.text)}</p>
        </li>`
      )
      .join("");

    return `
      <div class="container philosophy__inner">
        <header class="philosophy__head">
          <h2 class="section-title" id="philosophy-title">${this.escape(title)}</h2>
          <p class="section-intro">${this.escape(intro)}</p>
        </header>
        <ul class="philosophy__points">${items}</ul>
      </div>
      <div class="container">
        <p class="philosophy__encourage">${this.escape(encouragement)}</p>
      </div>`;
  }
}
