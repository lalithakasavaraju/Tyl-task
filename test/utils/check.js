

browser.addCommand('getUrlAndTitle', function () {
    // `this` refers to the `browser` scope
    return {
        url: this.getUrl(),
        title: this.getTitle()
    };
});
