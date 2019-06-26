<template>
    <ul class="list">
      <li
          v-for="item of letters"
          :key="item"
          :ref="item"
          @click="handleLetterClick" class="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) { // e指的是函数触发时的参数
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      const startY = this.$refs['A'][0].offsetTop
      const endY = e.changedTouches[0].clientY
      const index = Math.floor((endY - startY - 79) / 20)
      this.$emit('change', this.letters[index])
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letter = []
      for (let key in this.cities) {
        letter.push(key)
      }
      return letter
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
