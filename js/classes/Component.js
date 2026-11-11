/**
 * Base class for every visual part of the page.
 * Subclasses implement template(); render() writes it into the host element.
 */
class Component {
  /**
   * @param {HTMLElement} host - element the component renders into
   * @param {object} data - the part of SITE_CONTENT this component needs
   */
  constructor(host, data) {
    if (new.target === Component) {
      throw new Error("Component is abstract and cannot be created directly.");
    }
    if (!host) {
      throw new Error(`${new.target.name}: host element not found.`);
    }
    this.host = host;
    this.data = data;
  }

  /** @abstract Returns the HTML string for this component. */
  template() {
    throw new Error(`${this.constructor.name} must implement template().`);
  }

  /** Hook for subclasses to attach events after rendering. */
  afterRender() {}

  render() {
    this.host.innerHTML = this.template();
    this.afterRender();
    return this;
  }

  /** Escapes text so content can never break the markup. */
  escape(value) {
    const div = document.createElement("div");
    div.textContent = String(value);
    return div.innerHTML;
  }
}
