<template>
  <div class="wrapper" ref="wrapper"> <!--用于获取DOM元素-->
    <div>
      <div class="city-list border-topbottom">当前城市</div>
      <div class="button-wrapper">
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
      </div>
      <div class="city-list border-topbottom">热门城市</div>
      <div class="button-wrapper">
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
        <div class="city-list-button">
          <button class="button-list">北京</button>
        </div>
      </div>
      <div class="city-list border-topbottom">A</div>
      <ul>
        <li class="city-capital border-bottom">阿拉尔</li>
        <li class="city-capital border-bottom">阿拉尔</li>
        <li class="city-capital border-bottom">阿拉尔</li>
        <li class="city-capital border-bottom">阿拉尔</li>
        <li class="city-capital border-bottom">阿拉尔</li>
        <li class="city-capital border-bottom">阿拉尔</li>
        <li class="city-capital border-bottom">阿拉尔</li>
      </ul>
      <div class="city-list border-topbottom">B</div>
      <ul>
        <li class="city-capital border-bottom">北京</li>
        <li class="city-capital border-bottom">北京</li>
        <li class="city-capital border-bottom">北京</li>
        <li class="city-capital border-bottom">北京</li>
        <li class="city-capital border-bottom">北京</li>
        <li class="city-capital border-bottom">北京</li>
        <li class="city-capital border-bottom">北京</li>
      </ul>
      <div class="city-list border-topbottom">C</div>
      <ul>
        <li class="city-capital border-bottom">成都</li>
        <li class="city-capital border-bottom">成都</li>
        <li class="city-capital border-bottom">成都</li>
        <li class="city-capital border-bottom">成都</li>
        <li class="city-capital border-bottom">成都</li>
        <li class="city-capital border-bottom">成都</li>
        <li class="city-capital border-bottom">成都</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .border-topbottom
      &:before
        border-color: #777
      &:after
       border-color: #777
    .city-list
      height: .44rem
      line-height: .44rem
      background-color: #eee
      padding-left: .2rem
    .button-wrapper
      display: flex
      flex-wrap: wrap
      .city-list-button
        box-sizing: border-box
        width: 2.2rem
        height: .9rem
        /*line-height: 1rem*/
        padding: .19rem .2rem
        .button-list
          width: 1.8rem
          height: .52rem
          border-radius: .06rem
          border: 1px solid #ccc
          background-color: #fff
    .city-capital
      height: .7rem
      line-height: .7rem
      padding-left: .2rem
</style>
