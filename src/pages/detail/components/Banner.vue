<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg"
      />
      <div class="banner-desc">
        <p class="banner-title"> 长隆野生动物世界(AAAAA景区)</p>
        <p class="banner-amount">
          <span class="iconfont">&#xe634;</span>
          103
        </p>
      </div>
    </div>
    <banner-gallery
      :imgUrl="imgUrl"
      v-show="showSelf"
      @close="close"
    ></banner-gallery>
  </div>
</template>
<script>
import BannerGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  data () {
    return {
      imgUrl: [
        'http://img1.qunarzz.com/sight/p0/1904/9c/9cfe77cf4b5e7f58a3.img.jpg_350x240_2737a5a8.jpg',
        'http://img1.qunarzz.com/sight/p0/1605/d4/d4e2dce9d328d5b290.img.jpg_350x240_07d6e292.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/32/96b22e5c194d4bcb9458f29fbdc45d57.water.jpg_350x240_ac44becd.jpg'
      ],
      showSelf: false
    }
  },
  components: {
    BannerGallery
  },
  methods: {
    handleBannerClick () {
      this.showSelf = true
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
