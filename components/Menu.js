import React, { Component } from 'react';
import PostLink from '../components/PostLink'
import fetch from 'isomorphic-unfetch'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { shows: [] };
  }
  
  componentWillMount() {
    this.getMenu()
  }

  async getMenu() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    this.setState({ shows: data });
  }

  render() {
    return (
      <div className="menu">
        <h1>Batman TV Shows</h1>
        <ul>
          {this.state.shows.map(({show}) => (
            <PostLink key={show.id} post={show}/>
          ))}
        </ul>
        <style jsx>{`
          .menu {
            border-right: 1px solid;
            margin-right: 40px;
            padding: 20px;
          }

          h1 {
            font-family: "Arial";
            font-size: 1.4rem;
            margin: 0;
          }

          ul {
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}

Menu.defaultProps = {
  shows: []
};

export default Menu
