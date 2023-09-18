const mdxPlugin = require("@jamshop/eleventy-plugin-mdx")
const yaml = require("js-yaml")

module.exports = function (eleventyConfig) {
  // Support .mdx (https://mdxjs.com/docs/getting-started/#syntax) with https://github.com/jamshop/eleventy-plugin-mdx
  eleventyConfig.addPlugin(mdxPlugin)
  // support yaml data files in _data:
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents))
  return {
    dir: {
      // https://www.11ty.dev/docs/config/#input-directory
      input: "content",

      /**
       * The includes directory is meant for Eleventy layouts, include files, extends files, partials, or macros. These files will not be processed as full template files, but can be consumed by other templates.
       * Relative to input directory. https://www.11ty.dev/docs/config/#directory-for-includes
       */
      includes: "_includes",
      layouts: "_includes/layouts",
    },
  }
}
