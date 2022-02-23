import React from 'react';
import { connect } from 'react-redux';
import { getSingleRobot } from '../redux/robots';
//import {getSingleCandy, increaseQuantity, decreaseQuantity} from '../reducers'

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleRobot(this.props.match.params.id);
  }

  render() {
    console.log('props', this.props);
    const { singleRobot } = this.props;

    return (
      <div>
        <ul>
          <li>name: {singleRobot.name}</li>
          <li>imageURL: {singleRobot.imageUrl}</li>
          <li>fuel type: {singleRobot.fuelType}</li>
          <li>fuel level: {singleRobot.fuelLevel}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleRobot: state.robots.singleRobot,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleRobot: (id) => dispatch(getSingleRobot(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);
