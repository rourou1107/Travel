<template>
  <div class="header">
    <router-link to="/">
      <div class="header-back" v-if="showData">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
    </router-link>
    <div
      class="header-desc"
      v-if="!showData"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="left">
          <span class="iconfont back-icon">&#xe624;</span>
        </div>
      </router-link>
      <span>XXX景点详情</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showData: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let theTop = document.documentElement.scrollTop
      if (theTop > 60) {
        this.showData = false
        let theOpacity = theTop / 206.35
        this.opacityStyle.opacity = theOpacity > 1 ? 1 : theOpacity
      } else {
        this.showData = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header-back
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background-color: rgba(0, 0, 0, 0.7)
    .back-icon
      color: #fff
      font-size: .4rem
  .header-desc
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: $heightNum
    line-height: $heightNum
    background-color: $bgColor
    color: #ffffff
    text-align: center
    font-size: .3rem
    .left
      width: .64rem
      position: absolute
      top: 0
      left: 0
      text-align: center
      .back-icon
        font-size: .4rem
        color: #fff
</style>
