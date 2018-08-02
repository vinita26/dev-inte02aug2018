import {getpopularToicTemplate, renderViewToContainer} from "./dashboard.view"
const popularTopicData = [
  {
    "Name": "Cricket",
    "Img": "cricket.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "Name": "JavaScript",
    "Img": "javascript.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "Name": "Information Tech",
    "Img": "informationtech.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  }, {
    "Name": "Cricket",
    "Img": "cricket.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "Name": "JavaScript",
    "Img": "javascript.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "Name": "Information Tech",
    "Img": "informationtech.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
  {
    "Name": "Cricket",
    "Img": "cricket.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "Name": "JavaScript",
    "Img": "javascript.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "Name": "Information Tech",
    "Img": "informationtech.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
]

export const createPopularTopicSection = () => {
  const pTopictemp = getpopularToicTemplate(popularTopicData, "Popular Topic")
  renderViewToContainer(pTopictemp, "main")
}
