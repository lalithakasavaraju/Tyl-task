export default class BasePage {
    open(path) {
        browser.setWindowSize(1800, 1200);
        browser.url(path);
    }

    waitUsingFixedTimeout(time) {
        console.log('Pausing for ..' + time + "seconds");
        browser.pause(time);
    }
}