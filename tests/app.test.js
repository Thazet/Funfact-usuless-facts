import { expect, it, describe, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import { addFavoriteFact, getRamdomFacts } from '../src/js/app.js';

describe('pageTest', () => {
    let dom;
    let window;

    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable",
            runScripts: "dangerously",
        });
    
        window = dom.window
        document = dom.window.document
    })

    it("should generate new fact"), () => {
        const btnFact = document.querySelector(".carousel__change-image-button");
        const testArr = ["The average person falls asleep in seven minutes.", "Reindeer like to eat bananas."];
        expect(btnFact(testArr)).toEqual(["The average person falls asleep in seven minutes."]);
    }

    it("should exist addFavouriteFact function"), () => {
        expect(addFavoriteFact).toBeDefined();
    }

    it("should exist getRamdomFacts function"), () => {
        expect(getRamdomFacts).toBeDefined();
    }

    it("should link to favorites section"), () => {

    }

    it("should add fact to favorites section"), () => {

    }

    it("Instagram button should link to instagram page", () => {
        let linkInstagram = document.querySelector(".footer__icons-section--instagram")
        expect(linkInstagram.href).toEqual("https://www.instagram.com/");

    })

    it("Twitter button should link to twitter page", () => {
        let linkTwitter = document.querySelector(".footer__icons-section--twitter")
        expect(linkTwitter.href).toEqual("https://www.twitter.com/");

    })

    it("Facebook button should link to facebook page", () => {
        let linkFacebook = document.querySelector(".footer__icons-section--facebook")
        expect(linkFacebook.href).toEqual("https://www.facebook.com/");

    })

    it("YouTube button should link to YouTube page", () => {
        let linkYouTube = document.querySelector(".footer__icons-section--youtube")
        expect(linkYouTube.href).toEqual("https://www.youtube.com/");

    })
})