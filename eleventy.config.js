const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const fs = require('fs')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      shortcut: '/assets/dit-favicon.png'
    },
    header: {
      logotype: {
        html: fs.readFileSync('./docs/assets/dit-logo.svg', {encoding: 'utf8'})
      },
      productName: 'Content Performance Playbook',
    },
    footer: {
      meta: {
        items: [
          {
            href: 'https://github.com/uktrade/content-performance',
            text: 'GitHub repository for cotent-performance'
          },
          {
            href: 'https://www.gov.uk/government/organisations/department-for-business-and-trade',
            text: 'Created by the Department for Business and Trade (DBT)'
          }
        ]
      }
    }
  })

  eleventyConfig.addPassthroughCopy('./docs/assets')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      input: 'docs',
      output: "_site",
      layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    }
  }
};
