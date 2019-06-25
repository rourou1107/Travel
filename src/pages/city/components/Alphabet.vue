<template>
    <ul class="list">
      <li @click="handleLetterClick" class="item"
          v-for="(items,key) of cities"
          :key="key"
      >
        {{key}}
      </li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) { // e指的是函数触发时的参数
      // console.log(e.target.innerHTML)
      this.$emit('change', e.target.innerText)
    }
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
