
function searchOnYoutube(info) {
    var txt = info.selectionText;
    chrome.tabs.create({
        url: "http://www.youtube.com/results?search_query=" + txt
    })
}
// creating context if user allowed
chrome.storage.sync.get(['create_context'], function (items) {
    if (items.create_context == 1) {
        chrome.contextMenus.create({
            title: "Search On YouTube",
            contexts: ["selection"],
            onclick: searchOnYoutube
        });
    }
});