import * as React from "react"

import Page from "../components/Page"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
)

export default NotFoundPage
