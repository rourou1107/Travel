<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img :src="item.src" class="item-img"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
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
    margin-top: .2rem
    font-size: .28rem
    color: #000000
  .item
    display: flex
    height: 0
    overflow: hidden
    padding-bottom: 1.9rem
    .item-img
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0
      .item-title
        height: .7rem
        line-height: .7rem
        font-size: .3rem
        text-indent: .2rem
        elliplis()
      .item-desc
        height: .4rem
        line-height: .4rem
        font-size: .28rem
        text-indent: .2rem
        color: #ccc
        elliplis()
      .item-button
        font-size: .26rem
        background-color: #ff9300
        width: 1.6rem
        height: .45rem
        color: #fff
        margin-top: .1rem
        border-radius: .1rem
        margin-left: .2rem
        padding: .03rem
</style>
