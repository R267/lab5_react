import React from 'react';
import './Content.css';

const Content = (props) => {
  return (
    <main className="content">
      <h1>{props.title}</h1>
    </main>
  );
};

export default Content;
