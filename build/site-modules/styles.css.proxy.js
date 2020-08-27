
const code = "@charset \"UTF-8\";\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 72.5%;\n}\n\nbody {\n  font-size: 1.5em;\n  /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  /*\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  */\n  font-family: 'Playfair Display', serif;\n  background-color: #E5DDDE;\n  color: #4B4747;\n}\n\n.bg-primary {\n  background-color: #E5DDDE;\n}\n\n.bg-negative {\n  background-color: #4B4747;\n}\n\n.highlight-box {\n  background-color: #F8C3B3;\n  padding: .6em;\n  margin: .6em .0em;\n}\n\n.color-first {\n  color: #654A4E;\n}\n\n.bg-pink {\n  background-color: #B78888;\n}\n\n.bg-dark-brown {\n  background-color: #3F322A;\n}\n\n.bg-grey-red {\n  background-color: #6D3737;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.tag-label {\n  background-color: #654A4E;\n  color: white;\n  padding: 8px;\n  margin: 5px 0px;\n  white-space: nowrap;\n  border-radius: .4rem;\n}\n\n.tags-container {\n  white-space: wrap;\n  line-height: 4rem;\n}\n\n.tags-container :first-child {\n  margin-left: 0;\n}\n\n.card {\n  border: .95rem solid #fff;\n  box-shadow: rgba(145, 106, 112, 0.25) 0 6px 24px;\n  transition: box-shadow 0.4s ease-out;\n  background-color: white;\n  font-size: 1em;\n  line-height: 1.8;\n  font-weight: normal;\n  margin-bottom: 3rem;\n}\n\n.card h5 {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n\n.card .category-title {\n  margin-right: .3rem;\n}\n\n.category-title {\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-family: sans-serif, Arial, Helvetica;\n  font-weight: bold;\n  color: #654A4E;\n  margin-bottom: 0rem;\n}\n\nnav.main {\n  text-transform: uppercase;\n  font-size: .9rem;\n  font-family: sans-serif, Arial, Helvetica;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n\nnav.main > a {\n  margin: 16px .5rem 16px .5rem;\n}\n\nnav.main a, nav.main a:link, nav.main a:visited, nav.main a:active, nav.main a:hover {\n  color: #654A4E;\n}\n\nnav.main a, nav.main a:link, nav.main a:visited, nav.main a:active {\n  text-decoration: none;\n}\n\nnav.main a:hover {\n  text-decoration: underline;\n}\n\n#footer {\n  margin: 3rem 0rem 4rem 0rem;\n  text-align: center;\n}\n\n#footer hr {\n  margin: 1rem 0rem 1rem 0rem;\n}\n\n#footer a {\n  margin: 0rem 1rem;\n}\n\n.std-margins {\n  margin: 10% 50%;\n  min-width: 50%;\n}\n\n.quote-text {\n  font-size: 3em;\n}\n\nsection {\n  height: 80vh;\n  flex-grow: 0;\n}\n\n/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n\n.site-box {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n}\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0;\n  }\n  .site-box {\n    width: 100%;\n    padding: 20px;\n  }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%;\n  }\n  .site-box {\n    width: 100%;\n    padding: 10%;\n  }\n  .column,\n  .columns {\n    margin-left: 4%;\n  }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0;\n  }\n  .one.column,\n  .one.columns {\n    width: 4.66666666667%;\n  }\n  .two.columns {\n    width: 13.3333333333%;\n  }\n  .three.columns {\n    width: 22%;\n  }\n  .four.columns {\n    width: 30.6666666667%;\n  }\n  .five.columns {\n    width: 39.3333333333%;\n  }\n  .six.columns {\n    width: 48%;\n  }\n  .seven.columns {\n    width: 56.6666666667%;\n  }\n  .eight.columns {\n    width: 65.3333333333%;\n  }\n  .nine.columns {\n    width: 74.0%;\n  }\n  .ten.columns {\n    width: 82.6666666667%;\n  }\n  .eleven.columns {\n    width: 91.3333333333%;\n  }\n  .twelve.columns {\n    width: 100%;\n    margin-left: 0;\n  }\n  .one-third.column {\n    width: 30.6666666667%;\n  }\n  .two-thirds.column {\n    width: 65.3333333333%;\n  }\n  .one-half.column {\n    width: 48%;\n  }\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns {\n    margin-left: 8.66666666667%;\n  }\n  .offset-by-two.column,\n  .offset-by-two.columns {\n    margin-left: 17.3333333333%;\n  }\n  .offset-by-three.column,\n  .offset-by-three.columns {\n    margin-left: 26%;\n  }\n  .offset-by-four.column,\n  .offset-by-four.columns {\n    margin-left: 34.6666666667%;\n  }\n  .offset-by-five.column,\n  .offset-by-five.columns {\n    margin-left: 43.3333333333%;\n  }\n  .offset-by-six.column,\n  .offset-by-six.columns {\n    margin-left: 52%;\n  }\n  .offset-by-seven.column,\n  .offset-by-seven.columns {\n    margin-left: 60.6666666667%;\n  }\n  .offset-by-eight.column,\n  .offset-by-eight.columns {\n    margin-left: 69.3333333333%;\n  }\n  .offset-by-nine.column,\n  .offset-by-nine.columns {\n    margin-left: 78.0%;\n  }\n  .offset-by-ten.column,\n  .offset-by-ten.columns {\n    margin-left: 86.6666666667%;\n  }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns {\n    margin-left: 95.3333333333%;\n  }\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns {\n    margin-left: 34.6666666667%;\n  }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns {\n    margin-left: 69.3333333333%;\n  }\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns {\n    margin-left: 52%;\n  }\n}\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -.1rem;\n}\n\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -.1rem;\n}\n\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -.1rem;\n}\n\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -.08rem;\n}\n\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -.05rem;\n}\n\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\n\np {\n  margin-top: 0;\n}\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #654A4E;\n}\n\na:hover {\n  color: #B78888;\n}\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box;\n}\n\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\n\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600;\n}\n\nfieldset {\n  padding: 0;\n  border-width: 0;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline;\n}\n\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal;\n}\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside;\n}\n\nol {\n  list-style: decimal inside;\n}\n\nol, ul {\n  padding-left: 0;\n  margin-top: 0;\n}\n\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%;\n}\n\nli {\n  margin-bottom: 1rem;\n}\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px;\n}\n\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1;\n}\n\nth:first-child,\ntd:first-child {\n  padding-left: 0;\n}\n\nth:last-child,\ntd:last-child {\n  padding-right: 0;\n}\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem;\n}\n\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem;\n}\n\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem;\n}\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.u-pull-right {\n  float: right;\n}\n\n.u-pull-left {\n  float: left;\n}\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #654A4E;\n}\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n/* Larger than mobile */\n/* Larger than phablet (also point when grid becomes active) */\n/* Larger than tablet */\n/* Larger than desktop */\n/* Larger than Desktop HD */\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);