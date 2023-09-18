import React from "react"
import { AnalyticsEmbed } from "./components/analytics.jsx"

const SiteFooter = ({ page, site }) => (
  <footer className="pt-5 my-5 text-muted border-top fw-lighter">
    <ul className="nav justify-content-evenly">
      <li className="navbar-text">
        Ping Poet Products, LLC. &middot; &copy;{" "}
        {site.start_year && new Date().getFullYear() != site.start_year
          ? `${site.start_year} - ${new Date().getFullYear()}`
          : new Date().getFullYear().toString()}
      </li>
      <li className="nav-item">
        <a
          href={site.pageEditUrl.replace("${PAGE_PATH}", page.inputPath)}
          target="_blank"
          className="nav-link text-muted"
        >
          See something wrong? Edit it!
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="/contact">
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="/policy/terms">
          Terms of Service
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="/policy/privacy">
          Privacy &amp; Cookies
        </a>
      </li>
    </ul>
    <AnalyticsEmbed site={site} />
  </footer>
)
export default SiteFooter
