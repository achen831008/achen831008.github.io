import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={LayoutQuery}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <main>{children}</main>
      </div>
    )}
  />
)

const LayoutQuery = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
