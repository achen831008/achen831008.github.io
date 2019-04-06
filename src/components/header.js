// import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';

const Header = ({ siteTitle }) => (
  <div>
    <List component="nav">
      <ListItem component="div">
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                  Home
          </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                  Posts
          </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                  Contact
          </TypoGraphy>
          </ListItemText>
      </ListItem >
    </List>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
