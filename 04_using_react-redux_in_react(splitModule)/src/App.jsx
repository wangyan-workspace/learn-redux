import { PureComponent } from "react";
import store from "./store";
import Home from './page/home';
import Profile from './page/profile';
import Category from './page/category';
import About from './page/about';
import './style.css';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counterData.counter
    };
    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counterData.counter })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div className="pages">
          <Home/>
          <Profile/>
          <Category/>
          <About/>
        </div>
      </div>
    );
  }
}

export default App