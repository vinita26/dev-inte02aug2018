
const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getHorizontalScrollableContainerTemplate = (dataList) => {
  const hsContainerStr = `<div class="hsListContainer">
    </div>`
  const hsContainerTemp = htmlToTemplate(hsContainerStr)
  const appendListContainer = hsContainerTemp.querySelector(".hsListContainer")
  let hsContentStr = ""
  dataList.forEach((item) => {
    hsContentStr += `<div class="mdc-card demo-card demo-card--photo">
    <a class="mdc-card__primary-action demo-card__primary-action" href="#">
        <div class="mdc-card__media mdc-card__media--square demo-card__media">
        <div class="mdc-card__media-content demo-card__media-content--with-title">
        <div class="demo-card__media-title mdc-typography--subtitle2">
            ${item.Name}
        </div>
        </div>
        </div>
    </a>  
    <div class="mdc-card__actions mdc-card__action-icons">
        <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon"
            data-mdc-ripple-is-unbounded
            title="Share">share</button>
    </div>
    </div>`
  })

  const hsContentTemp = htmlToTemplate(hsContentStr)
  appendListContainer.appendChild(hsContentTemp)
  return hsContainerTemp
}
