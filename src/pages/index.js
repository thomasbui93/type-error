import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoryWidget from "../components/common/story-widget"
import Hero from "../components/common/hero"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="page-layout flex-container">
      <StoryWidget
        className="left"
        stories={getStories(data)}
        title="Featured stories"
      />
      <div className="right">
        <Hero />
      </div>
    </div>
  </Layout>
)

export const getStories = ({ allMarkdownRemark }) => {
  return allMarkdownRemark.edges.map(
    ({ node: { frontmatter, fields, timeToRead, id, excerpt } }) => ({
      id,
      slug: fields.slug,
      timeToRead,
      date: frontmatter.date,
      image: frontmatter.image,
      title: frontmatter.title,
      category: frontmatter.category,
      excerpt,
    })
  )
}

export const query = graphql`
  query HomeWidget {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      skip: 0
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            category
            image
          }
          timeToRead
          id
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`
