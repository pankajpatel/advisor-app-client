import {
  FETCH_ADVISORS_BEGIN,
  FETCH_ADVISORS_SUCCESS,
  FETCH_ADVISORS_FAILURE,
} from './actions';

const initialState = {
  advisors: [],
  loading: false,
  error: null,
};

const advisorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVISORS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ADVISORS_SUCCESS:
      return {
        ...state,
        loading: false,
        advisors: action.payload.advisors,
      };

    case FETCH_ADVISORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        advisors: [],
      };

    default:
      return state;
  }
};

export default advisorsReducer;
