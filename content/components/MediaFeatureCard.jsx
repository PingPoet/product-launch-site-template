import React from "react"
import { useRemarkSync } from "react-remark"

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
}) => {
  title = titleMarkdown ? useRemarkSync(titleMarkdown) : title
  description = descriptionMarkdown
    ? useRemarkSync(descriptionMarkdown)
    : description

  // mediaFirst=true means the image/video is on the left; otherwise right.
  const mediaOrderClass = mediaFirst ? "order-first" : "order-last"
  const textOrderClass = !mediaFirst ? "order-first" : "order-last"
  const svgStyle = {
    // default fill color for svg images is bootstrap primary
    fill: svgFillColor ?? "var(--bs-primary)",
  }

  svgViewBox = svgViewBox ?? "0 0 8 8"

  return (
    <div data-note="container optional action buttons">
      <div data-note="feature row" className="row g-5 my-5">
        <div data-note="title" className={`col-6 ${textOrderClass}`}>
          <h1 className="display-4">{title}</h1>
          <strong data-note="tagline" className="lead">
            {description}
          </strong>
        </div>

        <div
          data-note="media"
          className={`col align-self-center ${mediaOrderClass}`}
        >
          {videoUrl && (
            <video
              src={videoUrl}
              className="rounded-4 shadow"
              style={{ width: "100%", height: "100%" }}
            ></video>
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              className="rounded-4 shadow"
              style={{ width: "100%", height: "100%" }}
            />
          )}
          {svgUrl && (
            <svg viewBox={svgViewBox} className="rounded-4 shadow">
              <use href={svgUrl} style={svgStyle}></use>
            </svg>
          )}
        </div>
      </div>

      {(primaryAction || secondaryAction) && (
        <div data-note="actions" className="mb-5">
          {primaryAction && (
            <a className="btn btn-primary btn-lg mx-1" href={primaryAction.url}>
              {primaryAction.label}
            </a>
          )}
          {secondaryAction && (
            <a
              className="btn btn-secondary btn-lg mx-1"
              href={secondaryAction.url}
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
