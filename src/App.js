import React, { Component } from 'react';

import Header from './components/organism/Header'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
