import React from "react"
import { isRelativeUrl } from "../../../components/util/url"

/*
References:
- https://ogp.me/
- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- https://developers.google.com/search/docs/crawling-indexing/special-tags
- Good examples and tester: https://opengraph.dev/panel?url=https%3A%2F%2Fopengraph.dev
*/

//TODO: also support override page properties like seo.og.title https://github.com/seancdavis/twenty-ninety#seo
const SeoMetadata = ({ title, description, image, page, site }) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <TitleTags {...{ title, site }} />
      <DescriptionTags {...{ description, site }} />
      <UrlTags {...{ page, site }} />
      <ImageTags {...{ image, site }} />
    </>
  )
}

const UrlTags = ({ page, site }) => {
  if (page && page.url) {
    return (
      <>
        <meta property="og:url" content={site.baseUrl + page.url} />
        <meta property="twitter:url" content={site.baseUrl + page.url} />
      </>
    )
  } else {
    return <></>
  }
}

const TitleTags = ({ title, site }) => {
  title = title || (site ? site.defaultTitle : "")

  if (title) {
    return (
      <>
        <meta property="og:title" content={title || site.defaultTitle} />
        <meta property="twitter:title" content={title || site.defaultTitle} />
      </>
    )
  } else {
    return <></>
  }
}

const DescriptionTags = ({ description, site }) => {
  // opengraph: https://ogp.me/#optional
  // google gets description: https://developers.google.com/search/docs/crawling-indexing/special-tags
  description = description || (site ? site.defaultDescription : "")

  if (description) {
    return (
      <>
        <meta
          property="description"
          content={description || site.defaultDescription}
        />
        <meta
          property="og:description"
          content={description || site.defaultDescription}
        />
        <meta
          property="twitter:description"
          content={description || site.defaultDescription}
        />
      </>
    )
  } else {
    return <></>
  }
}

const ImageTags = ({ image, site }) => {
  let isRelative = false
  try {
    isRelative = image && isRelativeUrl(image)
  } catch (err) {
    console.error(`image url '${image}' is not a valid url.`)
    isRelative = false
  }
  if (isRelative) {
    image = site.baseUrl + image
  } else {
    image = site.baseUrl + site.seoImage
  }

  return (
    <>
      <meta property="og:image" content={image} />
      <meta property="twitter:image" content={image} />
    </>
  )
}

export default SeoMetadata
