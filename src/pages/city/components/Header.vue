<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header
    position: relative
    height: $heightNum
    line-height: $heightNum
    background-color: $bgColor
    color: #ffffff
    text-align: center
    font-size: .32rem
    .city-back
      width: .64rem
      position: absolute
      top: 0
      left: 0
      font-size: .4rem
      color: #fff
</style>
