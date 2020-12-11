# Page Links

Generate and share URLs to specific text or sections of any webpage.

Once the [extension](https://chrome.google.com/webstore/detail/page-links/bokkeodjhlniciglmfingmkojimjefdp) is installed, highlight the text you want to link to, right click and select "Copy link to...". This will copy a URL that can be shared with anyone\* to link directly to selected text.

When opening the URL, the opener's browser will scroll to the linked selected text and that text will be highlighted.

You can see an example of linking to specific text by following [this link](https://web.dev/text-fragments/#:~:text=The%20Text%20Fragments%20proposal%20adds%20support%20for%20specifying%20a%20text%20snippet%20in%20the%20URL%20hash.%20When%20navigating%20to%20a%20URL%20with%20such%20a%20text%20fragment%2C%20the%20user%20agent%20can%20emphasize%20and%2For%20bring%20it%20to%20the%20user's%20attention.).

If you'd prefer to link to a specific section of the webpage, you can generate a link to any header on the page. Hover over any header and a link icon will show. Clicking that link icon will copy a URL that can be shared with anyone, regardless of the browser they are use.

You can see an example of linking to the Browser Compatibility section of this page by following [this link](https://web.dev/text-fragments/#browser-compatibility).

\* Linking to text is enabled by Text Fragments, which is currently supported in Chrome and Edge. This functionality will not work in other browsers like Safari or Firefox. Linking to headers will work on all browsers.

## Contributing

### First time setup

1. Install [nvm](https://github.com/nvm-sh/nvm)
1. Clone this repo
1. In the project root:
   1. `nvm install`
   1. `nvm use`
   1. `yarn install`

### Helpful documentation

[Chrome Manifest Icon sizes](https://developer.chrome.com/apps/manifest/icons)

### Deploying

The chrome extension is built by running `yarn build:extension` from the project root. This will build a gzip'd bundle that can be submitted to the Chrome Store. This archive can be unzipped and loaded directly into chrome through the [extension ui](chrome://extensions/).

## Credit

<div>Link icon was made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Check icon was made by <a href="https://www.flaticon.com/free-icon/checked_709510?related_item_id=758569&term=success" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
