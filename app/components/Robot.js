import React from 'react';
import { Link } from 'react-router-dom';

const Robot = (props) => {
  const name = props.robot.name;
  const imgUrl = props.robot.imageUrl;

  return (
    <div className="robot">
      <p>{name}</p>
      <img src={imgUrl} />
    </div>
  );
};

export default Robot;
