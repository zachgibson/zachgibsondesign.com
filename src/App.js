import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import { SelectedProjects } from './components';

import { colors } from './config';
import { icon } from './icons';
import logo from './logo.svg';
import camo from './camo.svg';
import iPhone from './iPhone.svg';
import catalyst from './catalyst.png';
import cinnabar from './cinnabar.png';
import './App.css';
import './webfonts/fonts.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ color: colors.purple }}>
        <div className="App-header">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <h1 className="H1">Yo! I’m Zach, and I design apps.</h1>
        <div style={{ maxWidth: 1024 }}>
          <p style={{ margin: 0, fontSize: '2.125rem', fontWeight: 'bold', lineHeight: '3.25rem', letterSpacing: -0.88, }}>
            I’m a fan of rad socks
            <img className="App-header-icon" style={{ marginBottom: -8, paddingLeft: 8, paddingRight: 8 }} src={icon.sock} alt="sock" />,
            outer space
            <img className="App-header-icon" style={{ marginBottom: -16, paddingLeft: 8, paddingRight: 8 }} src={icon.galaxy} alt="galaxy" />,
            pepperoni jalapeño pizza
            <img className="App-header-icon" style={{ marginBottom: -8, paddingLeft: 4, paddingRight: 4 }} src={icon.pizza} alt="pizza" />,
            and Ancient Aliens
            <img className="App-header-icon" style={{ marginBottom: -8, paddingLeft: 4 }} src={icon.alien} alt="alien" />;
            I’m obsessed with caffeinated problem solving
            <img className="App-header-icon" style={{ marginBottom: -4, paddingLeft: 8, paddingRight: 8 }} src={icon.coffee} alt="coffee" />,
            prototyping with React Native
            <img className="App-header-icon" style={{ marginBottom: -4, paddingLeft: 4 }} src={icon.atom} alt="atom" />,
            Tolkien fantasy
            <img className="App-header-icon" style={{ marginBottom: -8, paddingLeft: 8 }} src={icon.sauron} alt="sauron" />,
            and the Internet
            <img className="App-header-icon" style={{ marginBottom: -8, paddingLeft: 4 }} src={icon.internet} alt="internet" />.
          </p>
        </div>
        <div style={{ marginTop: 160, marginBottom: 160 }}>
          <h4 style={{ textTransform: 'uppercase', letterSpacing: 0.42 }}>Selected Works</h4>
          <div className="Work">
            <div className="Project-right-aligned">
              <div style={{ zIndex: 1, maxWidth: 480, marginRight: 24 }}>
                <h2 className="H2">Catalyst by Buzznog</h2>
                <p className="Lead-text">
                  A white-labeled app for anyone with a fan base. I contributed everything from designing UI and icons to making product decisions and writing animations for this app. Oh, and the Fresh Prince uses this for his app, no biggie.
                </p>
              </div>
              <div className="iPhone">
                <div className="iPhone-media">
                  <img style={{ width: 276 }} src={catalyst} alt="screenshot" />
                </div>
                <img src={iPhone} alt="iPhone" />
              </div>
            </div>
            <div className="Project-left-aligned">
              <div className="iPhone">
                <div className="iPhone-media">
                  <img style={{ width: 276 }} src={cinnabar} alt="screenshot" />
                </div>
                <img src={iPhone} alt="iPhone" />
              </div>
              <div style={{ zIndex: 1, maxWidth: 480, marginLeft: 24 }}>
                <h2 className="H2">Cinnabar</h2>
                <p className="Lead-text">
                  This is a side project my buddy @leblaaanc and myself have been working on. Trying to defeat Charizard? Don’t worry, just use Golem with Rock Throw and Stone Edge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 96 }}>
          <h4 style={{ textTransform: 'uppercase', letterSpacing: 0.42 }}>Prototypes</h4>
        </div>
        
        <div className="Footer">
          <img style={{ zIndex: 0, position: 'absolute', bottom: 0, left: -120 }} src={camo} alt="camo" />
          <div className="Footer-top">
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, textTransform: 'uppercase' }}>Contact</p>
              <a style={{ color: colors.red, fontSize: 19, fontWeight: 'bold', textDecoration: 'none' }} href="mailto:zackgib@aol.com">zackgib@aol.com</a>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, textTransform: 'uppercase' }}>Reading</p>
              <a style={{ color: colors.red, fontSize: 19, fontWeight: 'bold', textDecoration: 'none' }} href="https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X">Mastery</a>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, textTransform: 'uppercase' }}>Jamming</p>
              <a style={{ color: colors.red, fontSize: 19, fontWeight: 'bold', textDecoration: 'none' }} href="https://itun.es/us/g2Sieb">Stranger Things Soundtrack</a>
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
          <div className="Footer-bottom">
            <p style={{ fontSize: 12, lineHeight: '20px' }}>Designed in <a className="Link" href="https://www.sketchapp.com/">Sketch</a>. Coded in <a className="Link" href="https://www.sublimetext.com/">Sublime</a>. Built using <a className="Link" href="https://facebook.github.io/react/">React</a>. Hosted on <a className="Link" href="https://aws.amazon.com/">AWS</a>. © Zachary Gibson 2016–∞</p>
            <div className="Footer-social">
              <a className="Footer-social-icon" href="https://twitter.com/zacharykeith_">
                <img src={icon.twitter} alt="twitter" />
              </a>
              <a className="Footer-social-icon" href="https://www.instagram.com/zacharykeith_/">
                <img src={icon.instagram} alt="instagram" />
              </a>
              <a className="Footer-social-icon" href="https://github.com/zachgibson">
                <img src={icon.github} alt="github" />
              </a>
              <a className="Footer-social-icon" href="https://www.pinterest.com/ssoduhpopp/">
                <img src={icon.pinterest} alt="pinterest" />
              </a>
              <a className="Footer-social-icon" href="https://dribbble.com/zacharygibson">
                <img src={icon.dribbble} alt="dribbble" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
