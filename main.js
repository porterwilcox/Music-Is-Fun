import ItunesController from "./app/components/Itunes/itunes-controller.js";


class App {
  constructor() {
    this.controllers = {
      itunesController: new ItunesController()
    }
  }
}

window.app = new App()