const store = require('./store');

console.log(store.getState()); // { name: 'why', counter: 100 }

// 改变名字
const nameAction = {type: "change_name", name: "james" };
store.dispatch(nameAction);
console.log(store.getState()); // { name: 'james', counter: 100 }

// 改变数字
const counterAction = { type: "add_number", counter: 10};
store.dispatch(counterAction);
console.log(store.getState()); // { name: 'james', counter: 110 }