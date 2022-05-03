chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({
    url: 'https://www.raven.fo',
    active: true,
  });
});
