document.addEventListener('DOMContentLoaded', function () {
    $("#homepage_suggestion").click(() => {
        toggle_button("homepage_suggestion")
    })

    $("#homepage_sidebar").click(() => {
        toggle_button("homepage_sidebar")
    })
    $("#upnext_suggestion").click(() => {
        toggle_button("upnext_suggestion")
    })
    $("#create_context").click(() => {
        toggle_button("create_context")
    })
    chrome.storage.sync.get(['homepage_sidebar', 'upnext_suggestion', 'homepage_suggestion', 'create_context'], function (items) {
        loadPopup(items)
    });
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});

function loadPopup(items) {
    var { homepage_sidebar, upnext_suggestion, homepage_suggestion, create_context } = items
    console.log(homepage_sidebar)
    console.log(upnext_suggestion)
    console.log(homepage_suggestion)
    if (upnext_suggestion == 1) {
        $("#upnext_suggestion").prop('checked', true);
    }
    if (homepage_suggestion == 1) {
        $("#homepage_suggestion").prop('checked', true);
    }
    if (homepage_sidebar == 1) {
        $("#homepage_sidebar").prop('checked', true);
    }
    if (create_context == 1) {
        $("#create_context").prop('checked', true);
    }
    if (!homepage_sidebar) {
        chrome.storage.sync.set(({ "homepage_sidebar": 1 }), function () { });
        $("#homepage_sidebar").prop('checked', true);
    }
    if (!homepage_suggestion) {
        chrome.storage.sync.set(({ "homepage_suggestion": 1 }), function () { });
        $("#homepage_suggestion").prop('checked', true);
    }
    if (!upnext_suggestion) {
        chrome.storage.sync.set(({ "upnext_suggestion": 1 }), function () { });
        $("#upnext_suggestion").prop('checked', true);
    }
    if (!create_context) {
        chrome.storage.sync.set(({ "create_context": 1 }), function () { });
    }
}



jQuery(document).on('keydown', '#search_on_yt', function (ev) {
    if (ev.key === 'Enter') {
        chrome.tabs.create({
            url: "http://www.youtube.com/results?search_query=" + $("#search_on_yt").val()
        })
    }
});
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0].url.includes("youtube.com")) {
        $("#alert_other_site").hide()
    }
});

//toggle values of button and save in localstorage
function toggle_button(name) {
    chrome.storage.sync.get(name, function (items) {
        console.log(items[name])
        var obj = {};
        obj[name] = items[name] * -1;
        chrome.storage.sync.set((obj), function () { });
    });
}