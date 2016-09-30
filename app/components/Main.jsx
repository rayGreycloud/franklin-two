import React from 'react';
import Nav from 'Nav';
import PageFooter from 'PageFooter';

const Main = (props) => {
  return (
    <div className='wrapper'>
      <Nav />
      <div>
        {props.children}
      </div>
      <div>
        <PageFooter />
      </div>

    </div>
  );
};

export default Main;
