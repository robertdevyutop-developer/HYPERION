/** Site footer. */
class Footer extends Component {
  constructor(host, data, company) {
    super(host, data);
    this.company = company;
  }

  template() {
    const year = new Date().getFullYear();
    return `
      <div class="container footer__inner">
        <img class="footer__logo" src="${this.escape(this.company.logo)}" alt="${this.escape(this.company.name)} logo" width="120" height="47">
        <p class="footer__note">${this.escape(this.data.note)}</p>
        <p class="footer__copy">&copy; ${year} ${this.escape(this.company.name)}. All rights reserved.</p>
      </div>`;
  }
}
