<template>
  <div class="header">
    <div class="left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
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
    height: $heightNum
    line-height: $heightNum
    background-color: $bgColor
    display: flex
    color: #fff
    .left
      width: .64rem
      float: left
      text-align: center
      .back-icon
        font-size: .4rem
    .input
      height: .62rem
      line-height: .62rem
      margin-top: .12rem
      flex: 1
      background-color: #fff
      color: #ccc
      border-radius: .1rem
      padding-left: .1rem
    .right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
