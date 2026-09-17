import {expect} from "@playwright/test"

export class DataDriven2{

    constructor(page){
        this.page = page;
        this.searchbox = '[id="twotabsearchtextbox"]'
        this.searchbutton = '[id="nav-search-submit-button"]'
        
        this.searchresult = '[cel_widget_id="MAIN-SEARCH_RESULTS-4"]'
        this.searchresult2 = '[class="a-color-state a-text-bold"]'
    }

    async navigation(url){
        await this.page.goto(url)

    }

   


}