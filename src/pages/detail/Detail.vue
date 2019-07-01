<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="veryHeight">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          child: [{
            title: '成人票三馆',
            child: [
              {
                title: '天河区售'
              }
            ]
          }, {
            title: '成人票五馆',
            child: [
              {
                title: '天河区售'
              }
            ]
          }]
        },
        {
          title: '学生票',
          child: [{
            title: '学生票三馆',
            child: [
              {
                title: '天河区售'
              }
            ]
          }, {
            title: '学生票五馆',
            child: [
              {
                title: '天河区售'
              }
            ]
          }]
        },
        {
          title: '儿童票',
          child: [{
            title: '儿童票三馆',
            grandson: [
              {
                title: '天河区售'
              }
            ]
          }, {
            title: '儿童票五馆',
            grandson: [
              {
                title: '天河区售'
              }
            ]
          }]
        },
        {
          title: '特惠票',
          child: [{
            title: '特惠票三馆',
            grandson: [
              {
                title: '天河区售'
              }
            ]
          }, {
            title: '特惠票五馆',
            grandson: [
              {
                title: '天河区售'
              }
            ]
          }]
        }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .veryHeight
      height: 30rem
</style>
