import React from 'react';

const Project = (props) => {
  const title = props.project.title;
  const deadline = props.project.deadline;

  return (
    <div className="project">
      <p>{title}</p>
      <p>{deadline}</p>
    </div>
  );
};

export default Project;
