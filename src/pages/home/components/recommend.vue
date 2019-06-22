<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '00001',
          src: 'http://img1.qunarzz.com/sight/p0/1902/7a/7ac34ad6cc6e7497a3.img.jpg_200x200_939e55b1.jpg',
          title: '东莞龙凤山庄影视渡假村',
          desc: '东莞龙凤山庄影视渡假村东莞龙凤山庄影视渡假村'
        },
        {
          id: '00002',
          src: 'http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg',
          title: '隐贤山庄',
          desc: '隐贤山庄隐贤山庄隐贤山庄隐贤山庄隐贤山庄'
        },
        {
          id: '00003',
          src: 'http://img1.qunarzz.com/sight/p0/1905/af/af4f95f579ee43b1a3.water.jpg_200x200_9fdbf80f.jpg',
          title: '东莞观音山旅游风景区',
          desc: '东莞观音山旅游风景区东莞观音山旅游风景区东莞观音山旅游风景区东莞观音山旅游风景区'
        },
        {
          id: '00004',
          src: 'http://img1.qunarzz.com/sight/p0/1603/1d/1d756648039bf30f90.water.jpg_200x200_64da9a70.jpg',
          title: '东莞香市动物园',
          desc: '东莞香市动物园东莞香市动物园东莞香市动物园'
        },
        {
          id: '00005',
          src: 'http://img1.qunarzz.com/sight/p0/1602/a2/a2db6aea3707663a90.img.jpg_200x200_cbf889a6.jpg',
          title: '梦幻百花洲',
          desc: '梦幻百花洲'
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
