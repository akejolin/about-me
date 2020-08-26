import React from 'react';
import FlexView from './components/FlexView';
import K from './components/KeyWord';
import './styles.scss'

import {
  primary as skills,
  domains,
} from './data/skills'
interface AppProps {}

function App({}: AppProps) {
  return (
    <React.Fragment>

<div className="container">
  <div className="row">
    <div className="column" style={{marginTop: '7%', textAlign: 'center'}}>
      <h1 style={{marginBottom: '.0rem', fontSize:'8rem', fontWeight: 'bold',color: 'white'}}>Akejolin</h1>
      <h5 className="color-first" style={{fontSize:'2.5rem', marginBottom: '1.2rem', marginTop: '.8rem'}}>About me</h5>
    </div>
  </div>

  <div className="row">
    <div className="column">
      <hr className="color-first no-margin"/>
      &nbsp;
      { /*
      <nav className="main">
        <a href="#">Skills</a>
        <a href="#">Leadership</a>
        <a href="#">LinkedIn</a>
      </nav>
      */}
    </div>
  </div>

  <div className="row">
    <div className="two offset-by-one columns">
    <img src="%BASE_URL%/media/png/akejolin-avatar.jpg" style={{width:'100%', borderRadius: '50%'}} />
    </div>
    <article className="eight columns">
      <h3 className="color-first">I've been around in the business for quite some time now</h3>
      <p>
        From the beginning, self-learned. I started my proffessional web engineer career <K>1999</K> and have since then,
        worked in many different kind of sets. I have run my own business, worked in many different kind of teams, different kind of companies, both small and big.
        I have had different roles. I have been a <K>Web Engineer</K>, <K>Engineering Manager</K> and today i work as a <K>Web Architect Engineer</K> at one one of the biggest websites in Sweden.
        <br/>
        I have many times contributed to <K>open source</K> projects. I have seen new technologies raise, but I have also seen many fall. I have seen new fancy frameworks being replaced by another. But one thing that has been persistent during these years, is my passion for the web.
        <br/>
      </p>
    </article>
  </div>
  <div className="row">
    <div className="one-half column">
      <h3 className="color-first" >Techniques & languages</h3>
      <p className="category-title">Technical domains</p>
      <p className="tags-container">{domains.map(item => <React.Fragment><span className="tag-label">{item}</span> </React.Fragment>)}</p>
      <div className="highlight-box">
      
      <span className="category-title">Highlighted technology this year:

      </span> Snowpack, Es-modules, Docker, Kubernetes, Travis.
      
      </div>
      <p className="category-title">Among many, I have worked with:</p>
      <p>{skills.map(item => <React.Fragment>{item}, </React.Fragment>)}</p>
    </div>
    <article className="one-half column">
      <h3 className="color-first">Leadership </h3>
      <p>
        I have many years of experience of engineering management, leadership, mentorship. I have had the opportunity to build both small and big teams. I have had wage responsibility, been scrum master, run and led agile software development. 
      </p>
      <h6>
        <cite>
          Leading a team is about carefully listen to the team members, putting the trust to them, their skills, their knowledge and give them space to contribute. Then you point a direction.
        </cite>
      </h6>
      <span className="category-title">Most important when I practice SCRUM:</span><br/>
      What i think is absolutely most important when practice SCRUM is to work very <K>close to the production</K> environment. If you are comfortable and do truly know how
      the production environment works and how it is set up, you will be able to solve problems faster, see the solution faster, be more confidence to take quicker decisions, take more correct decisions etc. All that comes together with the result of a lower <K>Time To Market (TTM)</K> .  
      
      <p><a href="https://www.scrumalliance.org/" title="scrumalliance.org" target="_blank"><img src="%BASE_URL%/media/png/scrum-cert.png" style={{width: '9rem'}}/></a></p>
    </article>
  </div>
  <div className="row">
    <div className="eight offset-by-two columns">
    <h3 className="color-first">Some projects I have done or participated in</h3>
    </div>
  </div>
  <div className="row" style={{marginBottom: '3rem'}}>
    
    <div className="eight offset-by-two columns">
      <div className="card">
        <h5>Asteroids Game</h5>
        <p>
          <a href="https://www.lindebros.com/asteroids" target="_blank">
            <img src="%BASE_URL%/media/png/asteroids.png" style={{width:'100%'}} />
          </a>
          <span className="category-title">Year: </span> 2018 (Updated 2020)
          <br/>
          <span className="category-title">Description:</span>
          I wanted to build a game to inspire my kids to start coding and during a hackday I did
          the classical game asteroids. The game is based on the <K>canvas</K> element
          with frame based animation. I used <K>React</K> to structure the app and
          added <K>Redux</K> to provide data across the application. The sounds are recorded by me.
          <br/>
          Later on I <K>dockerized</K> the app and let the it be served via <K>http2</K> protocol.
          Then the bundling became more unnecessary and i therefore converted the app to be based on <K>snowpack</K>.  
        </p>
      </div>

      <div className="card">
        <h5>Startup of Welcome App</h5>
        <p>
          <img src="%BASE_URL%/media/png/welcome-app.png" style={{width:'100%'}} />
          <span className="category-title">Year: </span> 2015
          <br/>
          <span className="category-title">Description:</span>
          I volunteered to work as a Frontend Developer for the start up of the Welcome App.
          The work includes Frontend development with framework such <K>Ionic</K> and <K>AngularJs</K> framework.
          <br/><br/>
          Welcome! is an app with the purpose to make it easier for newly arrived refugees and locals to connect.
          The app contains a private chats and events advertising. Messages and dynamic content were being auto-translated
          to desired language (arabic, persian, english, swedish) in real time, supported by <K>Bing Translator</K>.
        </p>
      </div>

    </div>
  </div>
  <div className="row">
    <div id="footer" className="column">
      <hr className="color-first no-margin"/>
        akejolin © 2020. <a href="https://www.linkedin.com/in/jonaslindebros/" target="_blank">LinkedIn</a>, <a href="https://github.com/akejolin" target="_blank">Github</a>
    </div>
  </div>
</div>






    </React.Fragment>
  );
}

export default App;