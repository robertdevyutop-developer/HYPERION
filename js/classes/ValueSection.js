/** The core value and the everyday actions that express it. */
class ValueSection extends Component {
  template() {
    const { title, lead, practices } = this.data;
    const items = practices
      .map(
        (item) => `
        <div class="value__practice">
          <dt>${this.escape(item.title)}</dt>
          <dd>${this.escape(item.text)}</dd>
        </div>`
      )
      .join("");

    return `
      <div class="container value__inner">
        <div class="value__main">
          <p class="value__label">${this.escape(this.data.label)}</p>
          <h2 class="value__title" id="value-title">${this.escape(title)}</h2>
          <p class="value__lead">${this.escape(lead)}</p>
        </div>
        <dl class="value__practices">${items}</dl>
      </div>`;
  }
}
