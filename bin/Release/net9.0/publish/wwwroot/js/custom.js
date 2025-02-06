window.getScreenWidth = () => {
    return window.innerWidth;
}
window.observeLoadMore = (dotNetHelper) => {
    let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            dotNetHelper.invokeMethodAsync("LoadMorePosts");
        }
    }, {
        rootMargin: "100px"
    });

    let target = document.getElementById("load-more-trigger");
    if (target) observer.observe(target);
};
window.disableScroll = () => {
    document.body.classList.add('no-scroll');
};

window.enableScroll = () => {
    document.body.classList.remove('no-scroll');
};
