import React, { Component } from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList.jsx';
import CodeLinks from './CodeLinks.jsx';

export class Projects extends Component {
  render() {
    return (
      <div className="container section generic-content-container page--projects" id="projects">
        <h2 className="page-title">Projects</h2>
        <div>
          <ProjectList />
        </div>
        <hr></hr>
        <div className="container">
          <CodeLinks />
        </div>
      </div>
    );
  }
}

export default Projects;
