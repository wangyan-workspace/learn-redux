import React, { PureComponent } from "react";
import store from '../store';
import { subNumberAction } from '../store/actionCreators';

export default class Profile extends PureComponent {
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

  subNumber(num) {
    store.dispatch(subNumberAction(num))
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>profile: {counter}</h2>
        <button onClick={() => this.subNumber(1)}>-1</button>
        <button onClick={() => this.subNumber(5)}>-5</button>
        <button onClick={() => this.subNumber(10)}>-10</button>
      </div>
    )
  }
}