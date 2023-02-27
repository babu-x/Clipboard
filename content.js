const content = document.body.innerText;

chrome.runtime.onMessage.addListener((request, sender, sendRes) => {
  if (request === "copy") {
    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
