import React, { Component } from 'react';
import Link from 'next/link'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>

        <style jsx>{`
          .header a {
            margin-right: 15px;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
