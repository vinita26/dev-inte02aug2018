
import {createHorizontalScrollableTemplate} from "../horizontal-scrollable-container/horizontalscrollablecontainer.controller"
const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getpopularToicTemplate = (dataList, headingText) => {
  const hsSectionStr = `<section class="card-section">
    <h6 class="mdc-typography--headline6">
      ${headingText}
      </h6>
      </section>`
  const hsSection = htmlToTemplate(hsSectionStr)
  const appendListContainer = hsSection.querySelector(".card-section")
  const hsContentTemp = createHorizontalScrollableTemplate(dataList)
  appendListContainer.appendChild(hsContentTemp)
  return hsSection
}
