import {
  FETCH_ADVISOR_BEGIN,
  FETCH_ADVISOR_SUCCESS,
  FETCH_ADVISOR_FAILURE,
  SELECT_ADVISOR,
  FETCH_ADVISOR_REVIEWS_BEGIN,
  FETCH_ADVISOR_REVIEWS_SUCCESS,
  FETCH_ADVISOR_REVIEWS_FAILURE,
} from './actions';

const initialState = {
  uuid: null,
  advisor: {},
  loading: false,
  error: null,
  reviews: {
    data: [],
    loading: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ADVISOR:
      return {
        ...state,
        uuid: action.payload.uuid,
      };
    case FETCH_ADVISOR_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ADVISOR_SUCCESS:
      return {
        ...state,
        loading: false,
        advisor: action.payload,
      };

    case FETCH_ADVISOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        advisor: {},
      };

    case FETCH_ADVISOR_REVIEWS_BEGIN:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          loading: true,
        },
      };

    case FETCH_ADVISOR_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          loading: false,
          data: action.payload,
        },
      };

    case FETCH_ADVISOR_REVIEWS_FAILURE:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          loading: false,
          data: [],
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
};
