import * as actionType from './constant';

const initialState = {
  counter: 100,
  banners: [],
  recommends: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_NUMBER:
      return { ...state, counter: state.counter + action.counter };
    case actionType.SUB_NUMBER:
      return { ...state, counter: state.counter - action.counter };
      case actionType.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
      case actionType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;