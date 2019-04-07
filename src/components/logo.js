import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => (
  <StaticQuery
    query={LogoQuery}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

const LogoQuery = graphql`
query {
  placeholderImage: file(relativePath: { eq: "logo.png" }) {
    childImageSharp {
      fixed(width: 250, height: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

export default Logo
