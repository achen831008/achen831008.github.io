import React from "react";
import { Link } from "gatsby";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostLink = ({ post }) => (
  <div>
    <Card>
      <CardBody>
        <CardTitle>{post.frontmatter.title}</CardTitle>
        <CardSubtitle>{post.frontmatter.date}</CardSubtitle>
        <CardText>{post.frontmatter.description}</CardText>
        <Link to={'/blog' + post.fields.slug}>
          Read More
        </Link>
      </CardBody>
    </Card>

    
  </div>
)

export default PostLink
