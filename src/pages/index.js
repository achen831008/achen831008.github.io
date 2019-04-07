import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Styles from "../components/styles";

const HomePage = ({data: { allMarkdownRemark: { edges }}}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={Styles.outer}>
      <div style={Styles.inner}>
        {Posts}
      </div>
    </div>
  </Layout>
}

export default HomePage

export const HomeQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`