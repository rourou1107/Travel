<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img">
          <img :src="item.src" class="item-img-content"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/minins.styl'
  .title
    height: .8rem
    line-height: .8rem
    background-color: #eee
    text-indent: .24rem
    font-size: .28rem
    color: #000000
  .item
    height: 0
    overflow: hidden
    padding-bottom: 53%
    .item-img
      width: 100%
      .item-img-content
        width: 100%
  .item-title
    height: .6rem
    line-height: .6rem
    font-size: .28rem
    text-indent: .2rem
    elliplis()
  .item-desc
    height: .4rem
    line-height: .4rem
    font-size: .24rem
    text-indent: .2rem
    color: #44444
    elliplis()
</style>
