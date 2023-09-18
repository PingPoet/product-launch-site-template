const tempBaseURL = new URL("https://example.com")

/**
 * Returns true if the URL is relative. If the string is not a URL an exception is thrown.
 */
export function isRelativeUrl(urlToTest /*: string */) /*: boolean*/ {
  // NOTE: if the specified URL is /not/ relative, the URL constructor ignores the provided baseUrl, and uses the specified URL's origin
  const parsed = new URL(urlToTest, tempBaseURL.origin)
  return tempBaseURL.origin === parsed.origin
}
