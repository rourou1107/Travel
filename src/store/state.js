let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default { // 全局访问的state对象
  city: defaultCity
}
