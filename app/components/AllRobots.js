import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';
import { Link } from 'react-router-dom';
import Robot from './Robot';

//axios

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    console.log('all robots props', this.props);
    return (
      <main>
        <h3>All Robots</h3>

        <ul>
          {this.props.robots.robots && this.props.robots.robots.length
            ? this.props.robots.robots.map((robot) => (
                <li key={robot.id}>
                  <Robot robot={robot} />
                </li>
              ))
            : 'Robots Loading...'}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  robots: state.robots,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRobots);
