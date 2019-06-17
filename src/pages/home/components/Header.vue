<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backbtn">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow">&#xe64a;</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header
    height: .86rem
    background-color: $bgColor
    display: flex
    color: #fff
    .header-left
      width: .64rem
      float: left
      line-height: .86rem
      .backbtn
        text-align: center
    .header-input
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      flex: 1
      background-color: #fff
      border-radius: .1rem
      color: #ccc
      padding-left: .2rem
    .header-right
      text-align: center
      width: 1.24rem
      float: right
      line-height: .86rem
      .arrow
        font-size: .28rem
        margin-left: -0.05rem
</style>
