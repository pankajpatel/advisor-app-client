import { SET_FILTER, SET_SORT } from './actions';

const initialState = {
  filters: { language: null },
  sort: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: { language: action.payload.language },
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
};
