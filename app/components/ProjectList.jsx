import React from 'react';
import { Links } from 'react-router';
import projectsData from '../projects-data';

const ProjectList = (props) => {
  const projectItems = projectsData.map((project) => {
      return (
        <div key={project.name} className="col-md-6 list-group-item">
          <div className="thumbnail">
            <img src={project.imageURL}></img>
            <div className="caption">
              <h4 className="media-title">{project.name}</h4>
              <p className="project-details"><em>{project.re}</em></p>
              <p className="project-details"><a href={project.appURL} target="_blank">See the Live App</a></p>
              <p className="project-details"><a href={project.codeURL} target="_blank">See the Code on GitHub</a></p>
            </div>
          </div>
        </div>
      );
  });

  return (
    <div className="project-list list-group">
      {projectItems}
    </div>
  );
};

export default ProjectList;
