import * as actionType from './constant';
import axios from 'axios';

export const changeBannersAction = (banners) => ({
    type: actionType.CHANGE_BANNERS,
    banners
  })
  
  export const changeRecommendsAction = (recommends) => ({
    type: actionType.CHANGE_RECOMMENDS,
    recommends
  })
  
  // 处理异步请求
  export const fetchHomeMultiAction = () => {
    return function(dispatch, getState) {
      axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
          const banners = res.data.data.banner.list;
          const recommends = res.data.data.recommend.list;
  
          dispatch(changeBannersAction(banners));
          dispatch(changeRecommendsAction(recommends));
      })
    }
  }