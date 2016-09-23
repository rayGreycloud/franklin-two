import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from 'Main';
import Landing from 'Landing';
import About from 'About';
import Projects from 'Projects';
import Contact from 'Contact';

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // Add path to server if using browserHistory
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="projects" component={Projects}></Route>
      <Route path="contact" component={Contact}></Route>
      <IndexRoute component={Landing}/>
    </Route>
  </Router>,
  document.querySelector('.container')
);
