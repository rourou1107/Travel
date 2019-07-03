<template>
  <div>
    <div
      class="item border-bot"
      v-for="(item, index) of list"
      :key="index"
    >
      <span class="item-icon"></span>
      {{item.title}}
      <div v-if="item.children" class="item-child">
        <detail-list :list="item.children"></detail-list> <!--递归调用,与name对应-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .border-bot
    border-bottom: solid .01rem #eee
  .item
    min-height: .8rem
    line-height: .8rem
    .item-icon
      display: inline-block
      position: relative
      top: .08rem
      left: .15rem
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
    .item-child
      padding: 0 .4rem
</style>
