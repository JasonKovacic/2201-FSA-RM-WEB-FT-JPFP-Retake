import axios from 'axios';

// ACTION TYPES
const SET_ROBOTS = 'SET_ROBOTS';
const GOT_SINGLE_ROBOT = 'GOT_SINGLE_ROBOT';
const CREATE_ROBOT = 'ROBOT_CREATED';
const DELETE_ROBOT = 'DELETE_ROBOT';

// ACTION CREATORS

const _setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

const _gotSingleRobot = (robot) => ({
  type: GOT_SINGLE_ROBOT,
  robot,
});

const _createRobot = (robot) => {
  return {
    type: CREATE_ROBOT,
    robot,
  };
};

// const _updateRobot = (robot) => {
//   return {
//     type: UPDATE_ROBOT,
//     robot,
//   };
// };

const _deleteRobot = (robot) => {
  return {
    type: DELETE_ROBOT,
    robot,
  };
};

// THUNK CREATORS
export const fetchRobots = () => async (dispatch) => {
  const { data } = await axios.get('/api/robots');
  dispatch(_setRobots(data));
};

export const getSingleRobot = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/robots/${id}`);
  dispatch(_gotSingleRobot(data));
};

export const createRobot = (robotName, history) => async (dispatch) => {
  const { data } = await axios.post('/api/robots', { name: robotName });
  dispatch(_createRobot(data));
  history.push('/robots');
};

// export const updateRobot = (robot, history) => {
//   return async (dispatch) => {
//     const { data: updated } = await axios.put(`/api/robots/${robot.id}`, robot);
//     dispatch(_updateRobot(updated));
//     history.push('/');
//   };
// };
export const deleteRobot = (id) => async (dispatch) => {
  const { data } = await axios.delete(`/api/robots/${id}`);
  dispatch(_deleteRobot(data));
  history.push('/robots');
};

const initialState = {
  robots: [],
  singleRobot: {},
};

const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROBOTS:
      return { ...state, robots: action.robots };
    case GOT_SINGLE_ROBOT:
      return { ...state, singleRobot: action.robot };
    case CREATE_ROBOT:
      return {
        ...state,
        robots: [...state.robots, action.robot],
      };
    case DELETE_ROBOT:
      return {
        ...state,
        robots: [...state.robots, action.robot],
      };

    // case DELETE_ROBOT:
    //   return state.filter((robot) => robot.id !== action.robot.id);
    // case UPDATE_ROBOT:
    //   return state.map((robot) =>
    //     robot.id === action.robot.id ? action.robot : robot
    //   );
    default:
      return state;
  }
};

export default robotsReducer;
