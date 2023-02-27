chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyPageContent",
    title: "Copy Page Content",
    contexts: ["all"],
  });
});

let message = "copy";
chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
      console.log("res is: ", res);
    });
  });
});
