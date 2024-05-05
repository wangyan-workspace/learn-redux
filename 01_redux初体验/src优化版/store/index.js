const { createStore } = require('redux');
const reducer = require('./reducer');

// 创建store
const store = createStore(reducer);

// 导出store
module.exports = store;
