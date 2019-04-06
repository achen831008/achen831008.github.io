import React from "react";
import { graphql, Link } from "gatsby";
import { Grid } from '@material-ui/core';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo from "../components/logo";

const styles = {
  outer: {
    width: '100%',
    marginTop: '4rem'
  },
  inner: {
    display: 'table',
    margin: '0 auto',
    textAlign: 'center'
  }
}

const listViews = [
  {
    name: "Blog",
    link: "/blog"
  },
  {
    name: "Photos",
    link: "/photos"
  },
  {
    name: "Contact",
    link: "/contact"
  }
]

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={styles.outer}>
      <div style={styles.inner}>
        <Logo />
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.position}</p>
        <p>{data.site.siteMetadata.description}</p>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              container
              spacing={16}
              alignItems={"center"}
              direction={"row"}
              justify={"center"}
            >
              {listViews.map(view => (
                <Grid key={view.name} item>
                  <Link to={view.link}>{view.name}</Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)

export const indexQuery = graphql`
  query IndexQuery {
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

export default IndexPage
