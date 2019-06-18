<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key=item.id>
        <img class='swiper-img' :src=item.src />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true // 支持循环轮播
      },
      swiperList: [
        {
          id: '00001',
          src: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/69c69e52b47d5f725be924f5563d1285.jpg_890x330_7bb33f95.jpg'
        },
        {
          id: '00002',
          src: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/4cf92fd4010e46d9e2698e89d08c5708.jpg_890x330_3f24e836.jpg'
        },
        {
          id: '00003',
          src: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/682df2ddabdeb7078f9a9225462c9470.jpg_890x330_b7a20aeb.jpg'
        }
      ]
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
    overflow: hidden
    height: 0
    padding-bottom:37%
    .swiper-img
      width: 100%
</style>
