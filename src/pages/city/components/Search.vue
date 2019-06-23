<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .search
    background-color: $bgColor
    height: .72rem
    padding: 0 .1rem
    .search-input
      height: .62rem
      width: 100%
      border-radius: .06rem
      text-align: center
      color: #666
      padding: 0 .1rem
      box-sizing: border-box
</style>
