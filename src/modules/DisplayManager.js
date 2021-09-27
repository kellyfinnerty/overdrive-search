import mySites from "./StorageManager.js";

const form = document.getElementById("overdrive-search");

export default function initDisplay() {
  form.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    clearSiteManagement();
    removePreviousLinks();
    submitForm();
    form.reset();
  });

  document.querySelector("#open-all-links").addEventListener("click", () => {
    openAllLinks();
  });

  document.querySelector("#manage-user-sites").addEventListener("click", () => {
    clearResults();
    showSiteManagement();
  });
}

function createLinkBox(website) {
  document.querySelector(".search-container").classList.remove("hidden");

  const container = document.getElementById("links-container");

  const overdriveLink = document.createElement("a");
  overdriveLink.classList.add("overdrive-link");
  overdriveLink.href = website.siteUrl;
  overdriveLink.innerHTML = `<div>${website.siteName}<div>`;
  overdriveLink.target = "_blank";

  container.appendChild(overdriveLink);
}

function submitForm() {
  const searchInput = form.querySelector("#search").value.trim();
  const currWebsites = mySites.getSearchableWebsites(searchInput);

  document.querySelector(
    ".results-title"
  ).textContent = `Results for "${searchInput}"`;

  for (const website of currWebsites) {
    createLinkBox(website);
  }
}

function showSiteManagement() {
  const container = document.querySelector(".add-library");
  container.classList.remove("hidden");
}

function openAllLinks() {
  const currLinks = document.querySelectorAll(".overdrive-link");

  for (const link of currLinks) {
    window.open(link.href, "_blank");
  }
}

function removePreviousLinks() {
  const linkContainer = document.getElementById("links-container");
  const links = Array.from(linkContainer.children);

  for (const link of links) {
    link.parentNode.removeChild(link);
  }
}

function clearResults() {
  document.querySelector(".search-container").classList.add("hidden");
}

function clearSiteManagement() {
  document.querySelector(".add-library").classList.add("hidden");
}
