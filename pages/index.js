import React, { Component } from 'react';
import Layout from '../components/MyLayout'
import Clock from '../components/Clock'
import fetch from 'isomorphic-unfetch'

import { bindActionCreators } from 'redux'
import { initStore, startClock, serverRenderClock } from '../store'
import withRedux from '../utils/withRedux'

class Index extends Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render() {
    return (
      <Layout>
        <Clock lastUpdate={this.props.lastUpdate} light={this.props.light} /> 
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  lastUpdate: state.lastUpdate,
  light: state.light,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  startClock
}, dispatch);

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
