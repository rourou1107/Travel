<template>
  <div>
    <div class="search">
      <input
        class="search-input" type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-written border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="search-written border-bottom"
          v-if="hasNoData"
        >
          输入的城市不存在,请重新输入
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      keyword: '',
      timer: false
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city) // 要派发一个changeCity的action,将city传过去
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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
  .search-content
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background-color: #e5e9f4
    z-index: 1
    .search-written
      height: .54rem
      line-height: .54rem
      padding-left: .2rem
      background-color: #fff
</style>
