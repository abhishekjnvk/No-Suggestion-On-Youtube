browser.storage.local.get(['homepage_sidebar', 'upnext_suggestion', 'homepage_suggestion'], function (items) {
    load_page(items)
});


function load_page(items) {
    console.log(items)
    var { homepage_sidebar, upnext_suggestion, homepage_suggestion } = items
    if (homepage_suggestion == 1) {
        $("<style>")
            .prop("type", "text/css")
            .html("#primary > YTD-RICH-GRID-RENDERER.style-scope.ytd-two-column-browse-results-renderer{display: none;}")
            .appendTo("head");
            $("<style>")
                .prop("type", "text/css")
                .html("#page-manager > YTD-BROWSE.style-scope.ytd-page-manager:first-child{display: none;}")
                .appendTo("head");
        blockAd()
    }
    if (upnext_suggestion == 1) {

        setTimeout(function () {
            document.getElementById("toggle").removeAttribute("active");
            document.getElementById("toggle").removeAttribute("checked");
        }, 5000);

        $("<style>")
            .prop("type", "text/css")
            .html("#secondary-inner,#secondary{display: none;}")
            .appendTo("head");
    }
    if (homepage_sidebar == 1) {

        $("<style>")
            .prop("type", "text/css")
            .html("#guide-renderer{display: none;}")
            .appendTo("head");
    }

}
function blockAd() {
    var playerDummy1 = [];
    var playerDummy2 = [];
    if (!document.getElementById('player')) {
        return;
    }
    var ads = document.querySelectorAll('#player-ads');
    playerDummy1.forEach.call(ads, function (ad) {
        ad.remove();
    });
    var videoAds = document.querySelectorAll('.video-ads');
    playerDummy2.forEach.call(videoAds, function (ad) {
        ad.remove();
    });
}
