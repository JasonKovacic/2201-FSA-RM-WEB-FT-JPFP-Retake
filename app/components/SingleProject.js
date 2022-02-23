import React from 'react';
import { connect } from 'react-redux';
import { getSingleProject } from '../redux/projects';
//import {getSingleCandy, increaseQuantity, decreaseQuantity} from '../reducers'

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleProject(this.props.match.params.id);
  }

  render() {
    console.log('props', this.props);
    const { singleProject } = this.props;

    return (
      <div>
        <h2>Project Information:</h2>
        <ul>
          <li>project: {singleProject.title}</li>
          <li>deadline: {singleProject.deadline}</li>
          <li>priority: {singleProject.priority}</li>
          <li>description: {singleProject.description}</li>
          <li>completed: {singleProject.completed}</li>
        </ul>
        <h2>Robots Assigned:</h2>
        <ul>
          {singleProject.robots && singleProject.robots.length
            ? singleProject.robots.map((robot) => (
                <div key={robot.id}>
                  <li>{robot.name}</li>
                </div>
              ))
            : 'No robots assigned'}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleProject: state.projects.singleProject,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleProject: (id) => dispatch(getSingleProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
