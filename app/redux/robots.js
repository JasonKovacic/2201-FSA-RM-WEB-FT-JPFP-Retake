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
    default:
      return state;
  }
};

export default robotsReducer;
