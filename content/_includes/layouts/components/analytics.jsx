import React from "react"

export const AnalyticsEmbed = ({ site }) => (
  <>
    {/* "Add the JS Snippet below before the ending body tag on any of your HTML pages." */}
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={site.cloudflare_insights_token}
    ></script>
  </>
)
