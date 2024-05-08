import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultiAction } from '../store/home'

export class about extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata()
  }

  render() {
    const { banners, recommends } = this.props;
    return (
      <div>
        <h2>about Page: {this.props.counter}</h2>
        <div className='banner'>
          <h2>轮播图数据:</h2>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className='recommend'>
          <h2>推荐数据:</h2>
          <ul>
            {
              recommends.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counterData.counter,
  banners: state.homeData.banners,
  recommends: state.homeData.recommends,
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultiAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(about);
