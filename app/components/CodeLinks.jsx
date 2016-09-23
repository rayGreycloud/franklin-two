import React from 'react';

const CodeLinks = () => {

  return (
    <div>
      <div>
        <h3 className="section-title">
          <i className="fa fa-code"></i> More of My Code:
        </h3>
      </div>
      <ul className="code-links list-group">
        <li className="list-group-item">
          <a title="@raygreycloud's GitHub Profile" href="https://github.com/rayGreycloud"
            target="_blank"
            className="button primary ">
            <i className="fa fa-github-square"></i>

            <span> My GitHub Profile</span>
          </a>
        </li>

        <li className="list-group-item">
          <a title="Ray Greycloud's CodePen" href="http://codepen.io/rayGreycloud" target="_blank" className="button primary">
              <i className="fa fa-codepen"></i>
              <span> My CodePen Portfolio</span>
          </a>
        </li>

      </ul>
    </div>
  );
}

export default CodeLinks;
