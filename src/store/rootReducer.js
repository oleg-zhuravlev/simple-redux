export const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: 'TEST' };
    default:
      return state;
  }
};
