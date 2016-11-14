import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import ReactPlayer from 'react-player';

import { colors } from '../../config';
import play from '../../play.svg';
import iPhone from '../../iPhone.svg';

class SelectedProjects extends Component {
  state = {
    playing: false,
    overlayVisible: true
  }

  toggleCatalystPlayBack() {
    this.setState({ playing: !this.state.playing, overlayVisible: !this.state.overlayVisible });
  }

  render() {
    const { title, copy, iTunesLink, googleLink, videoURL, i, posterImage, altText } = this.props;

    return (
      <div className={i % 2 ? 'Project-left-aligned' : 'Project-right-aligned'}>
        <div className="Project-text" style={{ zIndex: 1, maxWidth: 480, margin: 24 }}>
          <h2 className="H2">{title}</h2>
          <p className="Lead-text">{copy}</p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            { iTunesLink !== '' &&
              <a style={{ marginRight: 16, textDecoration: 'none', color: colors.red }} href={iTunesLink}>
                iOS →
              </a>
            }
            { googleLink !== '' &&
              <a style={{ textDecoration: 'none', color: colors.red }} href={googleLink}>
                Android →
              </a>
            }
          </div>
        </div>
        <div className="iPhone">
          <div className="iPhone-media">
            <ReactPlayer
              width={276}
              height={491}
              url={videoURL}
              playing={this.state.playing}
              onEnded={() => this.toggleCatalystPlayBack()}
            />
            <Motion style={{ opacity: spring(this.state.overlayVisible ? 1 : 0) }}>
              {val => {
                return (
                  <div
                    onClick={() => this.toggleCatalystPlayBack()}
                    style={{ opacity: val.opacity, cursor: 'pointer' }}
                  >
                    <div
                      className="iPhone-media-background"
                      style={{ backgroundColor: colors.purple }}
                    >
                      <img style={{ opacity: 0.5, width: 276, height: 491 }} src={posterImage} alt={altText} />
                    </div>
                    <img
                      className="Play-button"
                      src={play}
                      alt="play button"
                    />
                  </div>
                );
              }}
            </Motion>
          </div>
          <img src={iPhone} alt="iPhone" />
        </div>
      </div>
    );
  }
}

export default SelectedProjects;