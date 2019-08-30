import {
  FETCH_ADVISORS_BEGIN,
  FETCH_ADVISORS_SUCCESS,
  FETCH_ADVISORS_FAILURE,
  FETCH_ADVISORS_LOAD_MORE,
  UPDATE_ADVISORS,
  APPEND_ADVISORS,
  FILTER_ADVISORS,
} from './actions';

const initialState = {
  advisors: [],
  loading: false,
  error: null,
  hasMore: true,
  page: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVISORS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UPDATE_ADVISORS:
    case FETCH_ADVISORS_SUCCESS:
      return {
        ...state,
        loading: false,
        advisors: action.payload.advisors,
        hasMore: action.payload.hasMore,
      };

    case APPEND_ADVISORS:
      return {
        ...state,
        loading: false,
        advisors: [].concat(state.advisors, action.payload.advisors),
      };

    case FETCH_ADVISORS_LOAD_MORE:
      return {
        ...state,
        page: state.hasMore ? state.page + 1 : state.page,
      };

    case FETCH_ADVISORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        advisors: [],
      };

    case FILTER_ADVISORS:
    default:
      return state;
  }
};
