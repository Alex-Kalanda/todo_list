const initialState = [];

export const ActionTypes = {
  add: 'ADD',
  status: 'STATUS',
  clean: 'CLEAN_ALL',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.add:
      return [...state, action.payload];
    case ActionTypes.status:
      return action.payload;
    case ActionTypes.clean:
      return [];
    default:
      return state;
  }
};
