import React, { PureComponent } from "react";
import store from '../store';
import { addNumberAction } from '../store/actionCreators';

export default class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState().counter;

      this.setState({
        counter: state
      })
    })
  }

  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>home: {counter}</h2>
        <button onClick={() => this.addNumber(1)}>+1</button>
        <button onClick={() => this.addNumber(5)}>+5</button>
        <button onClick={() => this.addNumber(10)}>+10</button>
      </div>
    )
  }
}