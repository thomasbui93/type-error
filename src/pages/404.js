import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/elements/button"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found">
      <div className="not-found__notification">
        <h1>Hmmm.</h1>
        <p>It seems that you're lost in space. Let us help you to be home.</p>
        <div>
          <Link to="/">
            <Button> Back to home </Button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
