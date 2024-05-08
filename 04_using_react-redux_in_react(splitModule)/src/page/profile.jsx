import React, { PureComponent } from 'react'
import store from '../store';
import { subNumberAction } from '../store/counter'

export default class profile extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counterData.componentDidMount
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();

      this.setState({ counter: state.counterData.counter })
    })
  }

  subNumber(num) {
    store.dispatch(subNumberAction(num))
  }


  render() {
    return (
      <div>
        <h2>profile</h2>
        <button onClick={() => this.subNumber(1)}>-1</button>
        <button onClick={() => this.subNumber(5)}>-5</button>
        <button onClick={() => this.subNumber(10)}>-10</button>
      </div>
    )
  }
}
