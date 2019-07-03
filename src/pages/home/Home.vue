<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcon: HomeIcon,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  // 所有的请求全都放在首页这个文件请求比较好,分散开页面的体验不好
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 在生命周期函数内请求
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () { // 使用keeplive时,会增加一个actived生命周期函数,他执行的时期是页面被重新显示时
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo() // 与上次的城市不同时,需要重新加载ajax,保证当前页面显示的是当前的城市
    }
  }
}
</script>
<style>
</style>
