import React, { PureComponent } from "react";
import store from "./store";
import Home from "./page/home";
import Profile from "./page/profile";
import './style.css';

export default class APP extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter
    }
    this.unsubscribe = null;
  }

  componentDidMount() {
    // 监听订阅
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState().counter;
      this.setState({
        counter: state
      })
    })
  }

  // 取消订阅
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <div className="pages">
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}