import React, { Component } from 'react';
import './App.scss';
import prjdive from './assets/img/dive-thumb.jpg';
import prjrhizomatition from './assets/img/rhizomatition-thumb.jpg';
import prjemperfection from './assets/img/emperf-thumb.jpg';
import prjupgrade from './assets/img/upgrade-thumb.jpg';
import prjbottlebase from './assets/img/bottlebase.jpg';
import prjjnc from './assets/img/jnc-thumb.jpg';
import prjpbox from './assets/img/picture-box.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span className="App-title__main">Felix Wagner</span>
            <span className="App-title__subtitle">PORTFOLIO</span>
          </h1>
        </header>
        <div className="App-content">
          <div className="App-grid">                    
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="https://diveonreentry.com">
                      <img src={prjdive} alt="project-thumbnail" />
                  </a>
              </div>
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/felex0982/rhizomatition">
                      <img src={prjrhizomatition} alt="project-thumbnail" />
                  </a>
              </div>
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/felex0982/emulatedperfection">
                      <img src={prjemperfection} alt="project-thumbnail" />
                  </a>
              </div>
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="http://upgrade.hamburg">
                      <img src={prjupgrade} alt="project-thumbnail" />
                  </a>
              </div>
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="https://bottlebase.com">
                      <img src={prjbottlebase} alt="project-thumbnail" />
                  </a>
              </div>
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/felex0982/just_noticeable_communication/">
                      <img src={prjjnc} alt="project-thumbnail" />
                  </a>
              </div>
              <div className="App-grid__item">
                  <a target="_blank" rel="noopener noreferrer" href="https://picture-box.hamburg/">
                      <img src={prjpbox} alt="project-thumbnail" />
                  </a>
              </div>                         
          </div>
        </div>
        <footer className="App-footer">
            <h2 className="App-footer__headline">Contact</h2>
            <div className="App-footer__email">
                Mail: <a href='mailto:moin@fawagner.de'>moin@fawagner.de</a>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
