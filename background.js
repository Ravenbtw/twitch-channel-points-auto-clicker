chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: 'https://raven.fo/tcpac-thanks',
        active: true
    });
});
