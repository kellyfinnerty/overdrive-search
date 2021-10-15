import UserWebsites from "./UserWebsites.js";

const mySites = new UserWebsites();

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
mySites.addWebsite("McGill", "https://mcgill.overdrive.com/search?query=");

export default mySites;

const storage = (function () {
  const _userSitesName = "user-sites";

  function _getSites() {
    if (localStorage.getItem(_getSites) === null) {
      localStorage.setItem(_getSites, JSON.stringify(new UserWebsites()));
    }

    const userSites = Object.assign(
      JSON.parse(localStorage.getItem(_getSites)),
      new UserWebsites()
    );

    return userSites;
  }

  return { _getSites };
})();

console.log("hi");
storage._getSites();
