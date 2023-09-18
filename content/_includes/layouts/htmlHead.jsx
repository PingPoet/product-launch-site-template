import React from "react"
import SeoMetadata from "./components/seoMetadata.jsx"

const HtmlHead = (props) => {
  const { title, site } = props
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || (site ? site.defaultTitle : "")}</title>
        <link
          rel="icon"
          type="image/png"
          href={site.baseUrl + "/images/quill_pen_feather-rose_64x64.png"}
        />
        <link rel="stylesheet" href={site.baseUrl + "/style/style.css"} />
        <script type="module" src={site.baseUrl + "/js/main.js"}></script>
        <SeoMetadata {...props} />
      </head>
    </>
  )
}
export default HtmlHead
