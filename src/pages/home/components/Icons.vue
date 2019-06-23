<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) of pages" :key="index">
        <div class="icon" v-for="item of items" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src=item.src />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  // 计算属性来计算那些图标位于第一页,哪些图标位于第二页。。。。。
  computed: {
    pages () {
      const pages = []
      this.list.map((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = [] // 即pages是一个二维数组
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  @import '~styles/minins.styl'
  .icons >>> .swiper-container
    height: 0  /*高度固定死*/
    padding-bottom: 50%  /*目的是为了图片占位,防止图片加载出现抖动*/
  .icons
    margin-top: .2rem
    .icon
      overflow:hidden
      position: relative
      height: 0
      padding-bottom: 25%
      width: 25%
      float: left
      .icon-img
        position: absolute
        box-sizing: border-box  /*宽度是多少就是多少,不会受padding,border的影响*/
        padding: .1rem
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
</style>
