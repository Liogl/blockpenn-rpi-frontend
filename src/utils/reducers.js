export const loadingReducer = (state) => ({
  ...state,
  loading: true,
  error: null
});

export const successReducer = (state, { result }) => ({
  ...state,
  loading: false,
  error: null,
  result
});

export const errorReducer = (state, { error }) => ({
  ...state,
  loading: false,
  error: typeof error === 'object' ? error.message : error
});

export const mergeReducer = (state, newState) => ({ ...state, ...newState });
