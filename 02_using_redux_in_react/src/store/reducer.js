import * as actionType from './constant';

const initialState = {
  counter: 100
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_NUMBER:
      return { ...state, counter: state.counter + action.counter };
    case actionType.SUB_NUMBER:
      return { ...state, counter: state.counter - action.counter };
    default:
      return state;
  }
}

export default reducer;