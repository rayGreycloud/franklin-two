import React from 'react';
import Header from 'Header';
import PageFooter from 'PageFooter';

const Main = (props) => {
  return (
    <div>
      <Header />
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
