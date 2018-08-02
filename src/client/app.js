import "jquery"
import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"
import CreateChallengeController from "./ui-component/challenge/controller/CreateChallengeController"
import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection} from "./ui-component/dashboard/dashboard.controller"

import CreatePlayChallengeController from "./ui-component/play-challenge/controller/playChallenge.controller"

 $("#challengeSection").on("click", "#create", CreateChallengeController.saveChallengeDetails)
CreateChallengeController.displaySideBar()
CreatePlayChallengeController.displayPlaySideBar()

createHeader()
createMenu()
createMainContainer()
createPopularTopicSection()

