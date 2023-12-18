import { expect, it, describe, beforeEach, test } from 'vitest';
import { JSDOM } from 'jsdom';
import { backgroundChangeMobile, isMobile, advanceImage } from '../src/js/facts-section-main.js';

describe('pageTest', () => {
    let images, currentIndex, backgroundChange, advance, text;
    let dom;

    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable",
            runScripts: "dangerously",
        });
    });


    beforeEach(() => {
        images = [
            "./assets/img/1.png", "./assets/img/2.png", "./assets/img/3.png", "./assets/img/4.png", "./assets/img/5.png",
            "./assets/img/6.png", "./assets/img/7.png", "./assets/img/8.png"
        ];
        currentIndex = 0;
        backgroundChange = document.querySelector(".carousel__images");
        advance = document.getElementById('advance');
        text = document.getElementById('texto');
    });

    test('backgroundChangeMobile debe estar definido', () => {
        expect(backgroundChangeMobile).toBeDefined();
    });

    test('isMobile debe estar definido', () => {
        expect(isMobile).toBeDefined();
    });

    test('advanceImage debe estar definido', () => {
        expect(advanceImage).toBeDefined();
    });
});





