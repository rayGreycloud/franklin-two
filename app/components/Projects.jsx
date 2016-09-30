import React, { Component } from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList.jsx';
import CodeLinks from './CodeLinks.jsx';

export class Projects extends Component {
  render() {
    return (
      <div className="container page page--projects generic-content-container" id="projects">
        <h2 className="page-title">Projects</h2>
        <div className="project-list">
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
