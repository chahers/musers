window.getScreenWidth = () => {
    return window.innerWidth;
}

window.disableScroll = () => {
    document.body.classList.add('no-scroll');
};

window.enableScroll = () => {
    document.body.classList.remove('no-scroll');
};

window.blazorHelpers = {
    getScrollHeight: function (element) {
        return element.scrollHeight;
    },
    getScrollTop: function (element) {
        return element.scrollTop;
    },
    getClientHeight: function (element) {
        return element.clientHeight;
    }
};