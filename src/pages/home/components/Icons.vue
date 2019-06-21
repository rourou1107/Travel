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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconList: [
        {
          id: '0001',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '广州必游'
        },
        {
          id: '0003',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        },
        {
          id: '0004',
          src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '自然风光'
        },
        {
          id: '0005',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '珠江夜游'
        },
        {
          id: '0006',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '长隆亲子月'
        },
        {
          id: '0007',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0008',
          src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
          desc: '长隆度假区'
        },
        {
          id: '0009',
          src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
          desc: '广州塔'
        }
      ]
    }
  },
  // 计算属性来计算那些图标位于第一页,哪些图标位于第二页。。。。。
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
      elliplis()
</style>
