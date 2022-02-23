import axios from 'axios';

// ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS';

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

// ACTION CREATORS
const _setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

// THUNK CREATORS
export const fetchProjects = (projects) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/projects', projects);
      dispatch(_setProjects(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  projects: [],
  singleProject: {},
};

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.projects };
    default:
      return state;
  }
}
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
