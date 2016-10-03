import React, { Component } from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList.jsx';
import CodeLinks from './CodeLinks.jsx';

export class Projects extends Component {
  render() {
    return (
      <div className="container page page--projects generic-content-container" id="projects">
        <div className="wrapper">
          <h2 className="page-title">Projects</h2>
          <div className="project-list">
            <ProjectList />
          </div>
          <hr></hr>
          <div>
            <CodeLinks />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
