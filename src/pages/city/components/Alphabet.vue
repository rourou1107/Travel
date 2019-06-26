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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  updated () { // 生命周期钩子,页面数据变化且页面重新渲染后会执行
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) { // e指的是函数触发时的参数,里面存着很多属性和方法
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) { // 只有touchStart之后才可以触发touchMove
        if (this.timer != null) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 减少touchMove函数的触发次数
          const touchY = e.changedTouches[0].clientY
          const index = Math.floor((touchY - this.startY - 79) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
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
