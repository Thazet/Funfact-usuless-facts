import { expect, it, describe, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import { addFavoriteFact, getRamdomFacts } from '../src/js/app.js';

describe('pageTest', () => {
    let dom;
    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable",
            runScripts: "dangerously",
        });

    })
    it("should generate new fact"), async () => {
        document = dom.window.document;
        const btnFact = document.querySelector(".carousel__change-image-button");
        const testArr = ["The average person falls asleep in seven minutes.", "Reindeer like to eat bananas."];
        expect(btnFact(testArr)).toEqual(["The average person falls asleep in seven minutes."]);
    }

    it("should exist addFavouriteFact function"), async () => {
        expect(addFavoriteFact()).toBeDefined();
    }

    it("should exist getRamdomFacts function"), () => {
        expect(getRamdomFacts()).toBeDefined();
    }
})