import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo from "../components/logo";
import Styles from "../components/styles";

const aboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={Styles.outer}>
      <div style={Styles.inner}>
        <Logo />
        <div style={Styles.center}>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.position}</p>
          <p>{data.site.siteMetadata.description}</p>
        </div>
      </div>
    </div>
  </Layout>
)

export const aboutQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        title
        position
        description
        email
        github
        linkedin
      }
    }
  }
`

export default aboutPage
