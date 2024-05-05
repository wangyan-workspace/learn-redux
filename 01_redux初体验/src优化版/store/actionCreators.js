const { ADD_NUMBER, CHANGE_NAME } = require("./constants");

const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    name
})

const addNumberAction = (counter) => ({
    type: ADD_NUMBER,
    counter
})

module.exports = {
    changeNameAction,
    addNumberAction
}