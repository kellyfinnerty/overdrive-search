import "./style.css";
import initDisplay from "./modules/DisplayManager.js";
import UserWebsites from "./modules/UserWebsites.js";

initDisplay();

/* const storage = (function () {
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

storage._getSites(); */
