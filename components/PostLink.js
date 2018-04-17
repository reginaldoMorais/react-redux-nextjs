import React, { Component } from 'react';
import Link from 'next/link'

class PostLink extends Component {
  render() {
    const { post } = this.props;
    return (
      <li>
        <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
          <a>{post.name}</a>
        </Link>
        <style jsx>{`
          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            font-family: "Arial";
            font-size: 0.8rem;
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </li>
    );
  }
}

export default PostLink;
