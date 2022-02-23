import React from 'react';
import { Link } from 'react-router-dom';

const Robot = (props) => {
  const name = props.robot.name;
  const imgUrl = props.robot.imageUrl;
  const robotId = props.robot.id;
  const url = `/robots/${robotId}`;
  //const projectsAssigned = ??

  return (
    <div className="robot">
      <Link to={url}>
        <p>{name}</p>
      </Link>
      <p>{imgUrl}</p>
    </div>
  );
};

export default Robot;
