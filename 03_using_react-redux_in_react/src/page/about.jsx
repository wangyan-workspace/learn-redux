import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { changeBannersAction, changeRecommendsAction, fetchHomeMultiAction } from "../store/actionCreators";

class About extends PureComponent {

    // componentDidMount() {
    //     axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    //         const banners = res.data.data.banner.list;
    //         const recommends = res.data.data.recommend.list;

    //         this.props.changeBanners(banners);
    //         this.props.changeRecommends(recommends);
    //     })
    // }

    componentDidMount() {
        this.props.fetchHomeMulti();
    }

    render() {
        const { counter, banners, recommends} = this.props;

        return (
            <div>
                <h2>about Page: {counter}</h2>
                <div className="banner">
                    <h2>轮播图数据:</h2>
                    <ul>
                        {
                            banners.map((item, index) => {
                                return <li key={index}>{item.title}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="recommend">
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
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
})

// const mapDispatchToProps = (dispatch) => ({
//     changeBanners(banners) {
//         dispatch(changeBannersAction(banners));
//     },
//     changeRecommends(recommends) {
//         dispatch(changeRecommendsAction(recommends))
//     }
// })

const mapDispatchToProps = (dispatch) => ({
    fetchHomeMulti() {
        dispatch(fetchHomeMultiAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(About);