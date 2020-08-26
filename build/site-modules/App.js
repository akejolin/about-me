import React from '../web_modules/react.js';
import K from './components/KeyWord/index.js';
import './styles.css.proxy.js';
import { primary as skills, domains } from './data/skills.js';

function App({}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column",
    style: {
      marginTop: '7%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: '.0rem',
      fontSize: '8rem',
      fontWeight: 'bold',
      color: 'white'
    }
  }, "Akejolin"), /*#__PURE__*/React.createElement("h5", {
    className: "color-first",
    style: {
      fontSize: '2.5rem',
      marginBottom: '1.2rem',
      marginTop: '.8rem'
    }
  }, "About me"))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "color-first no-margin"
  }), "\xA0")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "two offset-by-one columns"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/about-me/media/png/akejolin-avatar.jpg",
    style: {
      width: '100%',
      borderRadius: '50%'
    }
  })), /*#__PURE__*/React.createElement("article", {
    className: "eight columns"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "color-first"
  }, "I've been around in the business for quite some time now"), /*#__PURE__*/React.createElement("p", null, "From the beginning, self-learned. I started my proffessional web engineer career ", /*#__PURE__*/React.createElement(K, null, "1999"), " and have since then, worked in many different kind of sets. I have run my own business, worked in many different kind of teams, different kind of companies, both small and big. I have had different roles. I have been a ", /*#__PURE__*/React.createElement(K, null, "Web Engineer"), ", ", /*#__PURE__*/React.createElement(K, null, "Engineering Manager"), " and today i work as a ", /*#__PURE__*/React.createElement(K, null, "Web Architect Engineer"), " at one one of the biggest websites in Sweden.", /*#__PURE__*/React.createElement("br", null), "I have many times contributed to ", /*#__PURE__*/React.createElement(K, null, "open source"), " projects. I have seen new technologies raise, but I have also seen many fall. I have seen new fancy frameworks being replaced by another. But one thing that has been persistent during these years, is my passion for the web.", /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "one-half column"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "color-first"
  }, "Techniques & languages"), /*#__PURE__*/React.createElement("p", {
    className: "category-title"
  }, "Technical domains"), /*#__PURE__*/React.createElement("p", {
    className: "tags-container"
  }, domains.map(item => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "tag-label"
  }, item), " "))), /*#__PURE__*/React.createElement("div", {
    className: "highlight-box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "category-title"
  }, "Highlighted technology this year:"), " Snowpack, Es-modules, Docker, Kubernetes, Travis."), /*#__PURE__*/React.createElement("p", {
    className: "category-title"
  }, "Among many, I have worked with:"), /*#__PURE__*/React.createElement("p", null, skills.map(item => /*#__PURE__*/React.createElement(React.Fragment, null, item, ", ")))), /*#__PURE__*/React.createElement("article", {
    className: "one-half column"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "color-first"
  }, "Leadership "), /*#__PURE__*/React.createElement("p", null, "I have many years of experience of engineering management, leadership, mentorship. I have had the opportunity to build both small and big teams. I have had wage responsibility, been scrum master, run and led agile software development."), /*#__PURE__*/React.createElement("h6", null, /*#__PURE__*/React.createElement("cite", null, "Leading a team is about carefully listen to the team members, putting the trust to them, their skills, their knowledge and give them space to contribute. Then you point a direction.")), /*#__PURE__*/React.createElement("span", {
    className: "category-title"
  }, "Most important when I practice SCRUM:"), /*#__PURE__*/React.createElement("br", null), "What i think is absolutely most important when practice SCRUM is to work very ", /*#__PURE__*/React.createElement(K, null, "close to the production"), " environment. If you are comfortable and do truly know how the production environment works and how it is set up, you will be able to solve problems faster, see the solution faster, be more confidence to take quicker decisions, take more correct decisions etc. All that comes together with the result of a lower ", /*#__PURE__*/React.createElement(K, null, "Time To Market (TTM)"), " .", /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.scrumalliance.org/",
    title: "scrumalliance.org",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/about-me/media/png/scrum-cert.png",
    style: {
      width: '9rem'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eight offset-by-two columns"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "color-first"
  }, "Some projects I have done or participated in"))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eight offset-by-two columns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h5", null, "Asteroids Game"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.lindebros.com/asteroids",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/about-me/media/png/asteroids.png",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "category-title"
  }, "Year: "), " 2018 (Updated 2020)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "category-title"
  }, "Description:"), "I wanted to build a game to inspire my kids to start coding and during a hackday I did the classical game asteroids. The game is based on the ", /*#__PURE__*/React.createElement(K, null, "canvas"), " element with frame based animation. I used ", /*#__PURE__*/React.createElement(K, null, "React"), " to structure the app and added ", /*#__PURE__*/React.createElement(K, null, "Redux"), " to provide data across the application. The sounds are recorded by me.", /*#__PURE__*/React.createElement("br", null), "Later on I ", /*#__PURE__*/React.createElement(K, null, "dockerized"), " the app and let the it be served via ", /*#__PURE__*/React.createElement(K, null, "http2"), " protocol. Then the bundling became more unnecessary and i therefore converted the app to be based on ", /*#__PURE__*/React.createElement(K, null, "snowpack"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h5", null, "Startup of Welcome App"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("img", {
    src: "/about-me/media/png/welcome-app.png",
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "category-title"
  }, "Year: "), " 2015", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "category-title"
  }, "Description:"), "I volunteered to work as a Frontend Developer for the start up of the Welcome App. The work includes Frontend development with framework such ", /*#__PURE__*/React.createElement(K, null, "Ionic"), " and ", /*#__PURE__*/React.createElement(K, null, "AngularJs"), " framework.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Welcome! is an app with the purpose to make it easier for newly arrived refugees and locals to connect. The app contains a private chats and events advertising. Messages and dynamic content were being auto-translated to desired language (arabic, persian, english, swedish) in real time, supported by ", /*#__PURE__*/React.createElement(K, null, "Bing Translator"), ".")))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    id: "footer",
    className: "column"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "color-first no-margin"
  }), "akejolin \xA9 2020. ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/jonaslindebros/",
    target: "_blank"
  }, "LinkedIn"), ", ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/akejolin",
    target: "_blank"
  }, "Github")))));
}

export default App;