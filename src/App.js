import React, { Component } from 'react';
import { colors } from './config';
import { images } from './icons';
import logo from './logo.svg';
import './App.css';
import './webfonts/fonts.css';

class App extends Component {
  render() {
    // console.log(colors)
    return (
      <div className="App" style={{ fontFamily: 'Karla', color: colors.purple }}>
        <div className="App-header">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <h1 style={{ marginBottom: 16, fontSize: 56, lineHeight: '64px', letterSpacing: -2, }}>Yo! I’m Zach, and I design apps.</h1>
        <div style={{ maxWidth: 1024 }}>
          <p style={{ margin: 0, fontSize: 34, fontWeight: 'bold', lineHeight: '52px', letterSpacing: -0.88, }}>
            I’m a fan of rad socks
            <img style={{ marginBottom: -8, paddingLeft: 8, paddingRight: 8 }} src={images.sock} alt="sock" />,
            outer space
            <img style={{ marginBottom: -16, paddingLeft: 8, paddingRight: 8 }} src={images.galaxy} alt="galaxy" />,
            pepperoni jalapeño pizza
            <img style={{ marginBottom: -8, paddingLeft: 4, paddingRight: 4 }} src={images.pizza} alt="pizza" />,
            and Ancient Aliens
            <img style={{ marginBottom: -8, paddingLeft: 4 }} src={images.alien} alt="alien" />;
            I’m obsessed with caffeinated problem solving
            <img style={{ marginBottom: -4, paddingLeft: 8, paddingRight: 8 }} src={images.coffee} alt="coffee" />,
            prototyping with React Native
            <img style={{ marginBottom: -4, paddingLeft: 4 }} src={images.atom} alt="atom" />,
            Tolkien fantasy
            <img style={{ marginBottom: -8, paddingLeft: 8 }} src={images.sauron} alt="sauron" />,
            and the Internet
            <img style={{ marginBottom: -8, paddingLeft: 4 }} src={images.internet} alt="internet" />.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
