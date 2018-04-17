import React, { Component } from 'react';
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import PostLink from '../components/PostLink'

class Post extends Component {
  render() {
    return (
      <Layout>
        <div className="post">
          <h2>{this.props.show.name}</h2>
          <p dangerouslySetInnerHTML={{__html: this.props.show.summary.replace(/<[/]?p>/g, '')}} />
          <img src={this.props.show.image.medium}/>  
        </div>  
        <style jsx global>{`
          .post h2 {
            font-size: 2rem;
          }
        `}</style>
      </Layout>
    );
  }
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res2 = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res2.json()

  console.log(`Fetched show: ${show.name}`)

  return {
    show
  }
}

export default Post;
