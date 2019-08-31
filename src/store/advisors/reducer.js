import {
  FETCH_ADVISORS_BEGIN,
  FETCH_ADVISORS_SUCCESS,
  FETCH_ADVISORS_FAILURE,
  FETCH_ADVISORS_LOAD_MORE,
  UPDATE_ADVISORS,
  APPEND_ADVISORS,
  FILTER_ADVISORS,
  RESET_FILTER_ADVISORS,
  RESET_SORT_ADVISORS,
} from './actions';

const initialState = {
  advisors: [],
  _advisors: null,
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

    case RESET_FILTER_ADVISORS:
    case RESET_SORT_ADVISORS:
    case UPDATE_ADVISORS:
    case FETCH_ADVISORS_SUCCESS:
      return {
        ...state,
        loading: false,
        _advisors: null,
        advisors: action.payload.advisors,
        hasMore: action.payload.hasMore,
      };

    case APPEND_ADVISORS:
      return {
        ...state,
        loading: false,
        hasMore: action.payload.hasMore,
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
      return {
        ...state,
        loading: false,
        _advisors: state[state._advisors ? '_advisors' : 'advisors'],
      };

    default:
      return state;
  }
};
