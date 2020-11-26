import { copy, setTextFragment } from "../utils";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "PageLinks",
    title: "Link to '%s'",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.selectionText) {
    copy(setTextFragment(tab?.url ?? "", info.selectionText));
  }
});
