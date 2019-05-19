import React from "react"
import Helmet from "react-helmet"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { prev, next } = pageContext

  return (
    <div className="content__actual is--padded">
      <Helmet title={`${markdownRemark.frontmatter.title}`} />
      <div className="page-header no-padding">
        <h1 className="page-title">{markdownRemark.frontmatter.title}</h1>
        <p className="page-subtitle">{markdownRemark.frontmatter.date}</p>
      </div>

      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
      }
    }
  }
`
