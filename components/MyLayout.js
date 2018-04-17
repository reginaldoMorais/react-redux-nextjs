import React, { Component } from 'react';
import Head from './Head'
import Header from './Header'
import Menu from './Menu'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Head />
        <Header />
        <div className="content">
          <Menu />  
          {this.props.children}
        </div>  

        <style jsx global>{`
          .layout {
            margin: 20px;
            padding: 20px;
            border: 1px solid #DDD;
          }
          .content {
            display: flex;
            justify-content: baseline;
            align-items: baseline;
            flex-direction: row;
          }
          .content .menu {
            flex: 1;
          }
          .content div:last-child {
            flex: 3;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
