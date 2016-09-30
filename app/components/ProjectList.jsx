import React from 'react';
import { Links } from 'react-router';
import projectsData from '../projects-data';

const ProjectList = (props) => {
  const projectItems = projectsData.map((project) => {
      return (
        <div key={project.name} className="col-md-6 list-group-item">
          <div className="thumbnail">
            <img src={project.imageURL}></img>
            <div className="project-item__caption">
              <h4 className="project-item__title">{project.name}</h4>
              <div className="project-item__details">
                <p><em>{project.re}</em></p>
                <p><a href={project.appURL} target="_blank">See the Live App</a></p>
                <p><a href={project.codeURL} target="_blank">See the Code on GitHub</a></p>
              </div>
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
