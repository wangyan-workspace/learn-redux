const store = require('./store');

const unsubscribe = store.subscribe(() => {
    console.log("订阅数据的变化", store.getState());
})

// 改变名字
const nameAction = { type: "change_name", name: "james" };
store.dispatch(nameAction);
// 改变数字
const counterAction = { type: "add_number", counter: 100 };
store.dispatch(counterAction);

unsubscribe();

// 改变名字
const nameAction2 = { type: "change_name", name: "james1" };
store.dispatch(nameAction2);
// 改变数字
const counterAction2 = { type: "add_number", counter: 20 };
store.dispatch(counterAction2);