/** Marks the nav link of the section currently in view. */
class ScrollSpy {
  /**
   * @param {string[]} sectionIds - ids of the sections to watch
   * @param {string} linkSelector - selector for the nav links
   */
  constructor(sectionIds, linkSelector) {
    this.sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    this.links = Array.from(document.querySelectorAll(linkSelector));
  }

  start() {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.highlight(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    this.sections.forEach((section) => observer.observe(section));
  }

  highlight(id) {
    this.links.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
}
