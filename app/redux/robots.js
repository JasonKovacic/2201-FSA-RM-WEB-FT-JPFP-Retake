import axios from 'axios';

// ACTION TYPES
const SET_ROBOTS = 'SET_ROBOTS';
const GOT_SINGLE_ROBOT = 'GOT_SINGLE_ROBOT';

// ACTION CREATORS

const _setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});

const _gotSingleRobot = (robot) => ({
  type: GOT_SINGLE_ROBOT,
  robot,
});

// THUNK CREATORS
export const fetchRobots = () => async (dispatch) => {
  const { data } = await axios.get('/api/robots');
  dispatch(_setRobots(data));
};

export const getSingleRobot = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/robots/${id}`);
  dispatch(_gotSingleRobot(data));
};

// export const createRobot = (robot, history) => {
//   return async (dispatch) => {
//     const { data: created } = await axios.post('/api/robots', robot);
//     dispatch(_createRobot(created));
//     history.push('/');
//   };
// };

// export const updateRobot = (robot, history) => {
//   return async (dispatch) => {
//     const { data: updated } = await axios.put(`/api/robots/${robot.id}`, robot);
//     dispatch(_updateRobot(updated));
//     history.push('/');
//   };
// };

// export const deleteRobot = (id, history) => {
//   return async (dispatch) => {
//     const { data: robot } = await axios.delete(`/api/robots/${id}`);
//     dispatch(_deleteRobot(robot));
//     history.push('/');
//   };
// };

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
    //   case CREATE_ROBOT:
    //   return [...state, action.robot];
    // case DELETE_ROBOT:
    //   return state.filter((robot) => robot.id !== action.robot.id);
    default:
      return state;
  }
};

export default robotsReducer;
