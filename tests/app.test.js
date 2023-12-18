import { expect, it, describe, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import { addFavoriteFact, getRamdomFacts } from '../src/js/app.js';

global.fetch = vi.fn()
function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) }
}

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

    it("should generate new fact", async () => {

        const mockRandomFactResponse = { text: 'The average person falls asleep in seven minutes.' }
        fetch.mockResolvedValue(createFetchResponse(mockRandomFactResponse))

        const randomFact = await getRamdomFacts()
        expect(randomFact).toBe(mockRandomFactResponse)

    })

    it("should exist addFavouriteFact function", () => {
        expect(addFavoriteFact).toBeDefined();
    })

    it("should exist getRamdomFacts function", () => {
        expect(getRamdomFacts).toBeDefined();
    })

    it("should link to favorites section", async () => {
        const sectionFavourite = document.querySelector('.container-favorite')
        expect(sectionFavourite.classList).toContain('hidden')
    })

    it("should add fact to favorites section", () => {

        expect(global.localStorage.getItem("arrayFavourite")).toBe(null)
        addFavoriteFact({ text: 'The average person falls asleep in seven minutes.' })
        expect(global.localStorage.getItem("arrayFavourite")).not.toBe(null)
        expect(JSON.parse(global.localStorage.getItem("arrayFavourite"))).toStrictEqual([{ "text": 'The average person falls asleep in seven minutes.' }])
    })

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