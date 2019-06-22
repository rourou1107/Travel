<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '00001',
          src: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '东莞龙凤山庄影视渡假村',
          desc: '东莞龙凤山庄影视渡假村东莞龙凤山庄影视渡假村'
        },
        {
          id: '00002',
          src: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
          title: '隐贤山庄',
          desc: '隐贤山庄隐贤山庄隐贤山庄隐贤山庄隐贤山庄'
        },
        {
          id: '00003',
          src: 'http://img1.qunarzz.com/sight/source/1505/4b/d04aa63b1b0ab3.jpg_r_640x214_a3a9c5b6.jpg',
          title: '东莞观音山旅游风景区',
          desc: '东莞观音山旅游风景区东莞观音山旅游风景区东莞观音山旅游风景区东莞观音山旅游风景区'
        },
        {
          id: '00004',
          src: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
          title: '东莞香市动物园',
          desc: '东莞香市动物园东莞香市动物园东莞香市动物园'
        }
      ]
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
