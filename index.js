document.addEventListener("DOMContentLoaded", () => {
  // Load the saved URL and redirect immediately
  chrome.storage.sync.get("customURL", () => {
    const targetURL = "https://bestgooglesite.vercel.app";
    if (targetURL) {
      window.location.replace(targetURL);
    }
  });
});
