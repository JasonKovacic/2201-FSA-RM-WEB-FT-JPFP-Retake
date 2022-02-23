import axios from 'axios';

// ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS';
const GOT_SINGLE_PROJECT = 'GOT_SINGLE_PROJECT';

// ACTION CREATORS
const _setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

const _gotSingleProject = (project) => ({
  type: GOT_SINGLE_PROJECT,
  project,
});

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

export const getSingleProject = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/projects/${id}`);
  console.log('project data', data);
  dispatch(_gotSingleProject(data));
};

const initialState = {
  projects: [],
  singleProject: {},
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.projects };
    case GOT_SINGLE_PROJECT:
      return { ...state, singleProject: action.project };
    default:
      return state;
  }
};

export default projectsReducer;
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
