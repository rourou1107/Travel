<template>
  <div class="container" @click="handleGalleryClick">
    <swiper :options="swiperOption" class="wrapper">
      <swiper-slide v-for="(item, index) of imageUrl" :key="index">
        <img class='gallery-img' :src="item"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'gallery',
  props: {
    imageUrl: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: true, // 自动滚动
        loop: true, // 支持循环轮播
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-pagination-fraction
    bottom: 1rem
  .container
    z-index: 99
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #000
    display: flex
    flex-direction: column
    justify-content: center
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallery-img
        width: 100%
    .swiper-pagination
      color: #fff
</style>
