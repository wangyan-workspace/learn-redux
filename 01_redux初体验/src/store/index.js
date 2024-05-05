const { createStore } = require('redux');

// 初始化数据
const initialState = {
    name: "why",
    counter: 100
}

// 定义reducer函数：纯函数
/**
 * 两个参数:
 * 参数一：store中目前保存的store
 * 参数二：本次需要更新的action（dispatch传入的action）
 * 返回值：它的返回值会作为store之后存储的state
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'change_name':
            return { ...state, name: action.name };
        case 'add_number':
            return { ...state, counter: state.counter + action.counter };
        default:
            return state;
    }
};

// 创建store
const store = createStore(reducer);

// 导出store
module.exports = store;
