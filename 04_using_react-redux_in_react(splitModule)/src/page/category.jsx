import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/counter'

export class category extends PureComponent {
  changeNum(num, hasAdd) {
    if (hasAdd) {
      this.props.addNum(num);
    } else {
      this.props.subNum(num);
    }

  }
  render() {
    return (
      <div>
        <h2>Category Page: {this.props.counter}</h2>
        <button onClick={() => this.changeNum(1, true)}>+1</button>
        <button onClick={() => this.changeNum(10, true)}>+10</button>
        <button onClick={() => this.changeNum(100, true)}>+100</button>
        <button onClick={() => this.changeNum(10, false)}>-10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterData.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNum(num) {
    dispatch(addNumberAction(num))
  },
  subNum(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(category)
