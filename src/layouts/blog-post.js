import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Image from "../components/elements/image" 
import Layout from "../components/layout";
import CategoryList from "../components/common/category-list";

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const categories = markdownRemark.frontmatter.category

  return (
    <Layout>
      <div className="flex-container flex-center">
        <Image img={markdownRemark.frontmatter.image} title={markdownRemark.frontmatter.title}/>
      </div>
      <div className="content__actual is--padded">
        <Helmet title={`${markdownRemark.frontmatter.title}`} />
        <div className="page-header no-padding">
          <h1 className="page-title">{markdownRemark.frontmatter.title}</h1>
          <CategoryList categories={categories}/>
          <p className="page-subtitle">{markdownRemark.frontmatter.date}</p>
        </div>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </div>
    </Layout>
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
        image
      }
    }
  }
`
