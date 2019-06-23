<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperShow">
      <swiper-slide v-for="item of list" :key=item.id>
        <img class='swiper-img' :src=item.src />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true, // 自动滚动
        loop: true // 支持循环轮播
      }
    }
  },
  computed: {
    swiperShow () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  /*让小圆点变为白色,因为swiper是别的组件，这里单纯改这个类是没用的,因为不会影响到别的组件,要穿透*/
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    width: 100%
    ///*overflow: hidden*/
    height: 0
    padding-bottom:37% /*高度为这个div的宽的37%不能设置height,height的百分比是相对于父元素的高度*/
    .swiper-img
      width: 100%
</style>
