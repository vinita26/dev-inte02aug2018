
export default class TemplateGenerator {
  static createHTMLElement(html) {
    const template = document.createElement("template")

    template.innerHTML = html

    return template.content.firstElementChild
  }

  static createAllChildHTMLElement(html) {
    const template = document.createElement("template")

    template.innerHTML = html

    return template.content
  }
}
