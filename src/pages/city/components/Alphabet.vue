<template>
  <ul class="list">
    <li class="item" v-for="(items,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.48rem
    bottom: 0
    width: .4rem
    .item
      height: .4rem
      text-align: center
      color: $bgColor
</style>
