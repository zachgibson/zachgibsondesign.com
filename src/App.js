import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import { SelectedProjects } from './components';

import { colors } from './config';
import { icon } from './icons';
import logo from './logo.svg';
import camo from './camo.svg';
import './App.css';
import './webfonts/fonts.css';
import catalystScreenshot from './catalyst.png';
import cinnabarScreenshot from './cinnabar.png';
import concertScreenshot from './concert.png';
import whitneyWebsite from './whitney-website.png';
import likeAnimation from './like-animation.gif';
import gibsonLogo from './gibson-logo.png';
import wmgCorporateApp from './wmg-corporate-app.png';
import cinnabarAppIcon from './cinnabar-app-icon.png';
import heIsRisenGraphic from './he-is-risen.png';
import buzznogMusicPlayer from './buzznog-music-player.png';
import buzznogLogo from './buzznog-logo.png';
import buzznogIconSet from './buzznog-iconset.png';
import realtorApp from './realtor-app.png';
import kanyeApp from './kanye-app.png';
import cinnabarIconSet from './cinnabar-iconset.png';
import bots from './bots.png';
import kidsCampPoster from './kids-camp-poster.png';

var selectedProjects = [
  {
    "title": "Catalyst",
    "copy": "A configurable app for music artists. I contributed everything from designing UI and icons to making product decisions and creating animations. Oh, and the Fresh Prince uses this for his app, no biggie.",
    "iTunesLink": "https://appsto.re/us/Ttwsdb.i",
    "googleLink": "https://play.google.com/store/apps/details?id=com.buzznog.catalyst.FloridaGeorgiaLine",
    "videoURL": "https://s3-us-west-2.amazonaws.com/zach-random-stuff/FGL.mov",
    "posterImage": catalystScreenshot,
    "altText": "florida georgia line app"
  },
  {
    "title": "Cinnabar",
    "copy": "This is a side project my buddy and I have been working on to supplement the Gymming experience in Pokémon GO. Trying to defeat Charizard? Don’t worry, just use Golem with Rock Throw and Stone Edge for the best possible chance of defeat.",
    "iTunesLink": "https://appsto.re/us/0DO3db.i",
    "googleLink": "",
    "videoURL": "https://s3-us-west-2.amazonaws.com/zach-random-stuff/Cinnabar.mov",
    "posterImage": cinnabarScreenshot,
    "altText": "cinnabar app"
  },
  {
    "title": "MSG Concert Series",
    "copy": "This is a quick protoype I designed and helped build for a Concert Series at Madison Square Garden. The idea was to create an app where people could unlock experiences with ticket bundles that would give them access to content like music and media, relevant to the artist’s concert.",
    "iTunesLink": "",
    "googleLink": "",
    "videoURL": "https://s3-us-west-2.amazonaws.com/zach-random-stuff/Concert.mov",
    "posterImage": concertScreenshot,
    "altText": "concert series prototype"
  },
];

var projectsColumnOne = [
  {
    image: whitneyWebsite,
    title: 'The Whitney Paige Blog',
    linkTitle: 'View Site',
    link: 'https://thewhitneypaige.com/'
  },
  {
    image: wmgCorporateApp,
    title: 'Warner Music App',
  },
  {
    image: likeAnimation,
    title: 'Like Animation',
    linkTitle: 'View in CodePen',
    link: 'http://codepen.io/zachgibson/pen/GoOqoK'
  },
  {
    image: kidsCampPoster,
    title: 'Fellowship Church Kid’s Camp Poster',
  },
  {
    image: gibsonLogo,
    title: 'Lettering',
  }
];

var projectsColumnTwo = [
  {
    image: buzznogIconSet,
    title: 'Buzznog Icon Set',
  },
  {
    image: buzznogMusicPlayer,
    title: 'Buzznog Music Player',
  },
  {
    image: cinnabarIconSet,
    title: 'Cinnabar Icon Set',
  },
  {
    image: bots,
    title: 'Bots',
  },
  {
    image: heIsRisenGraphic,
    title: 'Lettering',
  }
];

var projectsColumnThree = [
  {
    image: buzznogLogo,
    title: 'Buzznog Logo',
  },
  {
    image: realtorApp,
    title: 'Realtor App Prototype',
  },
  {
    image: kanyeApp,
    title: 'Kanye App',
  },
   {
    image: cinnabarAppIcon,
    title: 'Cinnabar App Icon',
  },
];

class App extends Component {
  render() {
    return (
      <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
        {val => {
          return (
            <div className="App" style={{ opacity: val.opacity, color: colors.purple }}>
              <div className="container">
                <div className="App-header">
                  <div style={{ flex: 1 }}>
                    <a href="/"><img src={logo} alt="logo" /></a>
                  </div>
                  <div style={{ flex: 1 }}>
                    <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none' }}>
                      <li><a style={{ cursor: 'not-allowed', opacity: 0.5, padding: 24, fontSize: 19, letterSpacing: 0.24, color: colors.red, textDecoration: 'line-through' }}>Blog</a></li>
                      <li><a style={{ cursor: 'not-allowed', opacity: 0.5, padding: 24, fontSize: 19, letterSpacing: 0.24, color: colors.red, textDecoration: 'line-through' }}>Experiments</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container">
                <h1 className="H1">Yo! I’m Zach, and I design apps.</h1>
                <div style={{ maxWidth: 1024 }}>
                  <p style={{ margin: 0, fontSize: '2.125rem', fontWeight: 'bold', lineHeight: '40px', letterSpacing: -0.88, }}>
                    I’m a fan of rad socks
                    <img className="App-header-icon" src={icon.sock} alt="sock" />,
                    outer space
                    <img className="App-header-icon" src={icon.galaxy} alt="galaxy" />,
                    pepperoni jalapeño pizza
                    <img className="App-header-icon" src={icon.pizza} alt="pizza" />,
                    and Ancient Aliens
                    <img className="App-header-icon" src={icon.alien} alt="alien" />;
                    I’m obsessed with caffeinated problem solving
                    <img className="App-header-icon" src={icon.coffee} alt="coffee" />,
                    prototyping with React Native
                    <img className="App-header-icon" src={icon.atom} alt="atom" />,
                    Tolkien fantasy
                    <img className="App-header-icon" src={icon.sauron} alt="sauron" />,
                    and the Internet
                    <img className="App-header-icon" src={icon.internet} alt="internet" />.
                  </p>
                </div>
              </div>
              <div className="container">
                <div style={{ marginTop: 160, marginBottom: 160 }}>
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: 0.42 }}>Selected Works</h4>
                  <div className="Work">
                    {
                      selectedProjects.map((project, i) => {
                        // console.log(project)
                        return <SelectedProjects
                          key={i}
                          i={i}
                          posterImage={project.posterImage}
                          title={project.title}
                          copy={project.copy}
                          iTunesLink={project.iTunesLink}
                          googleLink={project.googleLink}
                          videoURL={project.videoURL}
                        />
                      })
                    }
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 80, marginBottom: 80 }}>
                <div className="container">
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: 0.42 }}>Design Work</h4>
                </div>
                <div className="misc-projects">
                  <div className="project-column-container">
                    {
                      projectsColumnOne.map((project, i) => {
                        i = i + 1;
                        return (
                          <div key={i} className="project-thumb">
                            <img
                              style={{ width: '100%' }}
                              src={project.image}
                              alt="instagram"
                            />
                            <div style={{ fontSize: 19, fontWeight: 'bold', letterSpacing: -0.4 }}>{project.title}</div>
                            { project.linkTitle &&
                              <div>
                                <a style={{ fontSize: 15, color: colors.red, textDecoration: 'none' }} href={project.link}>{project.linkTitle}&rarr;</a>
                              </div>
                            }
                          </div>
                        );
                      })
                    }
                  </div>
                  
                  <div className="project-column-container">
                    {
                      projectsColumnTwo.map((project, i) => {
                        i = i + 1;
                        return (
                          <div key={i} className="project-thumb">
                            <img
                              style={{ width: '100%' }}
                              src={project.image}
                              alt="instagram"
                            />
                            <div style={{ fontSize: 19, fontWeight: 'bold', letterSpacing: -0.4 }}>{project.title}</div>
                            { project.linkTitle &&
                              <div style={{ fontSize: 19, fontWeight: 'bold', letterSpacing: -0.4 }}>
                                <a style={{ fontSize: 15, color: colors.red, textDecoration: 'none' }} href={project.link}>{project.linkTitle}</a>
                              </div>
                            }
                          </div>
                        );
                      })
                    }
                  </div>

                  <div className="project-column-container">
                    {
                      projectsColumnThree.map((project, i) => {
                        i = i + 1;
                        return (
                          <div key={i} className="project-thumb">
                            <img
                              style={{ width: '100%' }}
                              src={project.image}
                              alt="instagram"
                            />
                            <div style={{ fontSize: 19, fontWeight: 'bold', letterSpacing: -0.4 }}>{project.title}</div>
                            { project.linkTitle &&
                              <div style={{ fontSize: 19, fontWeight: 'bold', letterSpacing: -0.4 }}>
                                <a style={{ fontSize: 15, color: colors.red, textDecoration: 'none' }} href={project.link}>{project.linkTitle}</a>
                              </div>
                            }
                          </div>
                        );
                      })
                    }
                  </div>
                  
                </div>
              </div>
              
              <div className="Footer">
                <div className="container">
                  <img style={{ position: 'absolute', bottom: 0, left: -120 }} src={camo} alt="camo" />
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
                      <a style={{ color: colors.red, fontSize: 19, fontWeight: 'bold', textDecoration: 'none' }} href="https://itun.es/us/yjH1db">Harrison Brome EP</a>
                    </div>
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <div className="Footer-bottom">
                    <p style={{ fontSize: 12, lineHeight: '20px' }}>Designed in <a className="Link" href="https://www.sketchapp.com/">Sketch</a>. Coded in <a className="Link" href="https://www.sublimetext.com/">Sublime</a>. Built using <a className="Link" href="https://facebook.github.io/react/">React</a>. Hosted on <a className="Link" href="https://aws.amazon.com/">AWS</a>. <br/> © Zachary Gibson 2016–∞</p>
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
                      <a className="Footer-social-icon" href="https://www.facebook.com/zachary.gibson.56">
                        <img src={icon.facebook} alt="facebook" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}

export default App;
