import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/actionCreators";

class Category extends PureComponent {
    
    changeNumber(num, hasAdd) {
        if(hasAdd) {
            this.props.addNumber(num);
        } else {
            this.props.subNumber(num);
        }
    }

    render() {
        const { counter } = this.props;
        return (
            <div>
                <h2>category: {counter}</h2>
                <button onClick={() => this.changeNumber(1, true)}>+1</button>
                <button onClick={() => this.changeNumber(10, true)}>+10</button>
                <button onClick={() => this.changeNumber(100, true)}>+100</button>
                <button onClick={() => this.changeNumber(10, false)}>-10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    addNumber(num) {
        dispatch(addNumberAction(num))
    },
    subNumber(num) {
        dispatch(subNumberAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)