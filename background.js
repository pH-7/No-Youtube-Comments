// This is run when the extension is either being installed or upgraded
chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // Trigger when a requested URL contains "youtube.com"
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'youtube.com'},
                    }),
                ],

                // Show the extension's page action
                actions: [new chrome.declarativeContent.ShowPageAction()],
            },
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, {file: 'youtube/comment.js'});
});
