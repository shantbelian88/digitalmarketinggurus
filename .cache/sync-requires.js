const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-category-template-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/templates/CategoryTemplate.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/templates/PostTemplate.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/templates/PageTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/pages/404.js"))),
  "component---src-pages-category-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/pages/category.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shantbelian1/Documents/GitHub/digitalmarketinggurus/src/pages/index.js")))
}

