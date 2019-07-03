<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg"
      />
      <div class="banner-desc">
        <p class="banner-title"> {{sightName}} </p>
        <p class="banner-amount">
          <span class="iconfont">&#xe634;</span>
          {{gallaryImgs.length}}
        </p>
      </div>
    </div>
    <banner-gallery
      :imageUrl="imageUrl"
      v-show="showSelf"
      @close="close"
    ></banner-gallery>
  </div>
</template>
<script>
import BannerGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      imageUrl: [],
      showSelf: false
    }
  },
  components: {
    BannerGallery
  },
  methods: {
    handleBannerClick () {
      this.showSelf = true
      this.imageUrl = this.gallaryImgs
    },
    close () {
      this.showSelf = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-desc
      position: absolute
      display: flex
      height: .62rem
      line-height: .62rem
      left: 0
      bottom: 0
      right: 0
      color: #fff
      font-size: .34rem
      // 从上到下,渐变
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
      .banner-title
        flex: 1
        margin-left: .2rem
      .banner-amount
        font-size: .28rem
        margin-right: .2rem
        .iconfont
          font-size: .28rem
</style>
