import React from 'react';
import { Link } from 'react-router';

const Landing = (props) => {
  return (
    <div className="section" id="landing">

      <div className="media-object">
        <div className="media-object-section">
          <div className="thumbnail">
            <img src= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/470387/Benjamin_Franklin.png" />
          </div>
        </div>
        <div className="media-object-section main-section quote">
          <h4>"Diligence is the mother of good luck."</h4>
          <h5><em> --Benjamin Franklin</em></h5>
        </div>
      </div>

      <div className="opening">
        <hr></hr>
        <div className="heading">
          <h4>rayGreycloud</h4>
          <h5><em>Full-Stack Javascript Developer</em></h5>
        </div>
        <div>
          <p>
            I'm Ray, a web developer in Portland. I believe diligence and attention to detail are essential for good web app development. Especially going forward as the technologies and toolchains become more complicated and interconnected.
          </p>
          <p>
            Click below to learn more about myself, my projects or how to contact me.
          </p>
          <ul className="site-links list-group">
            <li className="list-group-item">
              <Link className="button primary" to="/about">ABOUT</Link>
            </li>
            <li className="list-group-item">
              <Link className="button primary" to="/projects">PROJECTS</Link>
            </li>
            <li className="list-group-item">
              <Link className="button primary" to="/contact">CONTACT</Link>
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
};

export default Landing;
