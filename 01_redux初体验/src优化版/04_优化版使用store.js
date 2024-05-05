/**
 * redux代码优化：
 * 1、将派发的action生成过程放到actionCreators函数中
 * 2、将定义的所有actionCreators的函数，放到一个独立的文件中：actionCreators.js
 * 3、actionCreators和reducer函数中使用字符串常量是一致的，所以将常量抽取到一个独立的constants的文件中
 * 4、将reducer和默认值（initialState）放到一个独立的reducer.js文件中，而不是在index.js
 */
const store = require('./store');
const { changeNameAction, addNumberAction} = require('./store/actionCreators');

const unsubscribe = store.subscribe(() => {
    console.log("订阅数据的变化", store.getState());
})

// 改变名字
store.dispatch(changeNameAction("james"));
// 改变数字
store.dispatch(addNumberAction(100));

unsubscribe();

// 改变名字
store.dispatch(changeNameAction("james1"));
// 改变数字
store.dispatch(addNumberAction(20));