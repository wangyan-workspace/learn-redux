import * as actionType from './constant';

export const addNumberAction = (num) => ({
  type: actionType.ADD_NUMBER,
  counter: num
});

export const subNumberAction = (num) => ({
  type: actionType.SUB_NUMBER,
  counter: num
});
