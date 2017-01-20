import $ from "jquery";
import {fleet} from "./fleet-data.js";
import {FleetDataService} from "./services/fleet-data-service.js";
import {ApplicationBase} from "./framework/application-base.js";

// Google Maps Key: AIzaSyCXakTF8Qhkpma_VNMlu3up4waMKZaWDDU 

export class App extends ApplicationBase {

    constructor() {
        super("Your Pantry");
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
    }
}

export let application = new App();
application.show($("body"));
