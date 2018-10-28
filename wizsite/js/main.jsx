import React from 'react';
import ReactDom from'react-dom';
import Index from './index';

ReactDom.render(
  <Index url="/api/v1/" />,
  //Select reactEntry as the element we modify
  document.getElementById('reactEntry'),  
);