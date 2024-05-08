import React, { PureComponent } from 'react'
import store from '../store';
import { addNumberAction } from '../store/counter';

export default class home extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counterData.counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counterData.counter })
    })
  }

  addNumber(num) {
    store.dispatch(addNumberAction(num));
  }
  
  render() {
    return (
      <div>
        <h2>home</h2>
        <button onClick={() => this.addNumber(1)}>+1</button>
        <button onClick={() => this.addNumber(5)}>+5</button>
        <button onClick={() => this.addNumber(10)}>+10</button>
      </div>
    )
  }
}
