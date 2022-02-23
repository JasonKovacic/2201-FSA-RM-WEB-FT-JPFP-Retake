import axios from 'axios';

// ACTION TYPES
const SET_ROBOTS = 'SET_ROBOTS';

// ACTION CREATORS

const _setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});

// THUNK CREATORS
export const fetchRobots = () => async (dispatch) => {
  const { data } = await axios.get('/api/robots');
  dispatch(_setRobots(data));
};

const initialState = {
  robots: [],
  singleRobot: {},
};

const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROBOTS:
      return { ...state, robots: action.robots };
    default:
      return state;
  }
};

export default robotsReducer;
