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
    const { singleProject } = this.props;

    return (
      <div>
        <ul>
          <li>project: {singleProject.title}</li>
          <li>deadline: {singleProject.deadline}</li>
          <li>priority: {singleProject.priority}</li>
          <li>description: {singleProject.description}</li>
          <li>completed: {singleProject.completed}</li>
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
