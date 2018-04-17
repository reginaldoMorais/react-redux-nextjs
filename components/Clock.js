import React, { Component } from 'react';
import Link from 'next/link'

class Clock extends Component {
  format(t) {
    return `${this.pad(t.getUTCHours())}:${this.pad(t.getUTCMinutes())}:${this.pad(t.getUTCSeconds())}`;
  }

  pad(n) {
    return n < 10 ? `0${n}` : n;
  }

  render() {
    const { post, lastUpdate, light } = this.props;
    return (
      <div className={light ? 'light' : ''}>
        {this.format(new Date(lastUpdate))}
        <style jsx>{`
          div {
            padding: 15px 0;
            display: inline-block;
            color: #82FA58;
            font: 2rem menlo, monaco, monospace;
            background-color: #000;
            width: 100%;
            text-align: center;
          }

          .light {
            background-color: #fff;
          }
        `}</style>
      </div>
    );
  }
}

export default Clock;
