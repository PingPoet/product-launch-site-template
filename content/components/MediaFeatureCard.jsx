import React from "react"
import { useRemarkSync } from "react-remark"
import { isRelativeUrl } from "./util/url"

const MediaFeatureCard = ({
  title,
  titleMarkdown,
  description,
  descriptionMarkdown,
  videoUrl,
  svgUrl,
  svgFillColor,
  svgViewBox,
  imageUrl,
  mediaFirst,
  primaryAction,
  secondaryAction,
  site,
}) => {
  title = titleMarkdown ? useRemarkSync(titleMarkdown) : title
  description = descriptionMarkdown
    ? useRemarkSync(descriptionMarkdown)
    : description

  // mediaFirst=true means the image/video is on the left; otherwise right.
  // the order-md-* classes mean apply on "medium and up" size screens, so mobile screens always get the image first.
  const mediaOrderClass = mediaFirst
    ? "order-md-first order-first"
    : "order-md-last"
  const textOrderClass = !mediaFirst
    ? "order-md-first order-last"
    : "order-md-last"

  const svgStyle = {
    // default fill color for svg images is bootstrap primary
    fill: svgFillColor ?? "var(--bs-primary)",
  }

  svgViewBox = svgViewBox ?? "0 0 8 8"

  return (
    <div data-note="container optional action buttons" className="pb-5 mb-5">
      <div data-note="feature row" className="row g-5">
        <div
          data-note="title"
          className={`col-sm-6 col-md-6 ${textOrderClass}`}
        >
          <h1 className="display-4">{title}</h1>
          <strong data-note="tagline" className="lead">
            {description}
          </strong>
        </div>

        <div
          data-note="media"
          className={`col-sm-6 col-md-6 align-self-center ${mediaOrderClass}`}
        >
          {videoUrl && (
            <video
              src={site.baseUrl + videoUrl}
              className="rounded-4 shadow"
              style={{ width: "100%", height: "100%" }}
            ></video>
          )}
          {imageUrl && (
            <img
              src={site.baseUrl + imageUrl}
              className="rounded-4 shadow"
              style={{ width: "100%", height: "100%" }}
            />
          )}
          {svgUrl && (
            <svg viewBox={svgViewBox} className="rounded-4 shadow">
              <use href={site.baseUrl + svgUrl} style={svgStyle}></use>
            </svg>
          )}
        </div>
      </div>

      {(primaryAction || secondaryAction) && (
        <div data-note="actions" className="mb-5">
          {primaryAction && (
            <a
              className="btn btn-primary btn-lg mx-1"
              href={
                isRelativeUrl(primaryAction.url)
                  ? site.baseUrl + primaryAction.url
                  : primaryAction.url
              }
            >
              {primaryAction.label}
            </a>
          )}
          {secondaryAction && (
            <a
              className="btn btn-secondary btn-lg mx-1"
              href={
                isRelativeUrl(secondaryAction.url)
                  ? site.baseUrl + secondaryAction.url
                  : secondaryAction.url
              }
            >
              {secondaryAction.label}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default MediaFeatureCard
