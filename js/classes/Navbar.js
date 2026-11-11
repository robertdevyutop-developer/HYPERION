/** Top navigation with a collapsible menu on small screens. */
class Navbar extends Component {
  constructor(host, data, company) {
    super(host, data);
    this.company = company;
  }

  template() {
    const links = this.data
      .map(
        (item) =>
          `<li><a class="nav__link" href="${this.escape(item.href)}">${this.escape(item.label)}</a></li>`
      )
      .join("");

    return `
      <div class="nav container">
        <a class="nav__brand" href="#top" aria-label="${this.escape(this.company.name)} home">
          <img src="${this.escape(this.company.logo)}" alt="${this.escape(this.company.name)} logo" width="140" height="54">
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
          <span class="visually-hidden">Menu</span>
        </button>
        <nav class="nav__menu" id="primary-nav" aria-label="Primary">
          <ul class="nav__list">${links}</ul>
        </nav>
      </div>`;
  }

  afterRender() {
    this.toggle = this.host.querySelector(".nav__toggle");
    this.menu = this.host.querySelector(".nav__menu");

    this.toggle.addEventListener("click", () => this.setOpen(!this.isOpen()));
    this.menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) this.setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.isOpen()) {
        this.setOpen(false);
        this.toggle.focus();
      }
    });

    window.addEventListener("scroll", () => this.updateScrollState(), { passive: true });
    this.updateScrollState();
  }

  isOpen() {
    return this.toggle.getAttribute("aria-expanded") === "true";
  }

  setOpen(open) {
    this.toggle.setAttribute("aria-expanded", String(open));
    this.menu.classList.toggle("is-open", open);
  }

  updateScrollState() {
    this.host.classList.toggle("is-scrolled", window.scrollY > 8);
  }
}
