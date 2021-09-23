class MyWebsites {
  constructor() {
    // formated with objects of {siteName, siteUrl}
    this.websites = [];
  }

  addWebsite(siteName, siteUrl) {
    this.websites.push({ siteName, siteUrl });
  }

  getWebsites() {
    return this.websites;
  }

  setWebsites(websites) {
    this.websites = websites;
  }

  getSearchableWebsites(searchTerm) {
    let output = [];

    for (const website of this.websites) {
      output.push({
        siteName: website.siteName,
        siteUrl: website.siteUrl + encodeURI(searchTerm),
      });
    }

    return output;
  }
}

const form = document.getElementById("overdrive-search");

const mySites = new MyWebsites();
mySites.addWebsite("MVLC", "https://mvlc.overdrive.com/search?query=");
mySites.addWebsite(
  "BPL",
  "https://bpl.overdrive.com/bpl-visitor/content/search?query="
);
mySites.addWebsite(
  "CLAMS",
  "https://clamsnet.overdrive.com/clamsnet-visitor/content/search?query="
);
mySites.addWebsite(
  "CW MARS",
  "https://cwmars.overdrive.com/cwmars-visitor/content/search?query="
);
mySites.addWebsite(
  "Minuteman",
  "https://minuteman.overdrive.com/minuteman-visitor/content/search?query="
);
mySites.addWebsite(
  "Noble",
  "https://noble.overdrive.com/noble-visitor/content/search?query="
);
mySites.addWebsite(
  "Old Colony Library Network",
  "https://ocln.overdrive.com/ocln-visitor/content/search?query="
);
mySites.addWebsite("SAILS", "https://sails.overdrive.com/search?query=");
mySites.addWebsite("mcgill", "https://mcgill.overdrive.com/search?query=");

function removePreviousLinks() {
  const linkContainer = document.getElementById("links-container");
  const links = Array.from(linkContainer.children);

  for (const link of links) {
    link.parentNode.removeChild(link);
  }
}

function createLinkBox(website) {
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

function openAllLinks() {
  const currLinks = document.querySelectorAll(".overdrive-link");

  for (const link of currLinks) {
    window.open(link.href, (target = "_blank"));
  }
}

form.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  removePreviousLinks();
  submitForm();
  form.reset();
});

document.querySelector("#open-all-links").addEventListener("click", () => {
  openAllLinks();
});
