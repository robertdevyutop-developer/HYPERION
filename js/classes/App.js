/** Builds every component from the content and starts the page. */
class App {
  constructor(content) {
    this.content = content;
    this.components = [];
  }

  start() {
    const c = this.content;
    const el = (id) => document.getElementById(id);

    this.components = [
      new Navbar(el("site-header"), c.nav, c.company),
      new Hero(el("top"), c.company),
      new PillarsSection(el("pillars"), c.pillars),
      new ValueSection(el("value"), c.value),
      new PhilosophySection(el("philosophy"), c.philosophy),
      new Footer(el("site-footer"), c.footer, c.company)
    ];

    this.components.forEach((component) => component.render());

    new ScrollSpy(
      ["top", "pillars", "value", "philosophy"],
      ".nav__link"
    ).start();
  }
}
