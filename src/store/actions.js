export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city) // 通过提交mutations的方式来改变city
  }
}
