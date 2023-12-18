import { expect, it, describe, beforeAll } from 'vitest'
import {JSOM} from 'jsdom'

import "./app.test.js";

describe('pageTest', () => {
    let dom; 
    beforeAll(async () =>{
        dom = await JSDOM.fromFile("./index.html", {
        resources: "usable",
        runScripts: "dangerously",
    });

})
it("should generate new fact"), async () => {
    document = dom.window.document;
    const btnFact = document.querySelector (".carousel__change-image-button")

    const testArr = [ "The average person falls asleep in seven minutes.", "Reindeer like to eat bananas."];
        

expect (btnFact(testArr)).toEqual ([ "The average person falls asleep in seven minutes."]);
}


})