"use strict";

function redirectToOtherSite(url) {
  if (typeof url !== "string" || !url.trim()) {
    return;
  }
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }
  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = url;
}
