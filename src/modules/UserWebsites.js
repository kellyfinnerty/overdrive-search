export default class MyWebsites {
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
