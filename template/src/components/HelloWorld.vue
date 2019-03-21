<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="depend-title">使用依赖库</h2>
    <div class="index-list">
        <a href="//www.vuejs.org" target="_blank">Vue</a>
        <a href="//vuex.vuejs.org" target="_blank">vuex</a>
        <a href="//router.vuejs.org" target="_blank">vue-router</a>
        <a href="//www.iviewui.com" target="_blank">iView</a>
    </div>
    <div class="index-list">
        <a href="https://github.com/js-cookie/js-cookie#readme" target="_blank">js-cookie</a>
        <a href="https://github.com/axios/axios" target="_blank">axios</a>
    </div>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    font-size: 24px;
}
.index-list{
    margin-top: 30px;
}
.depend-title{
    margin-top: 50px;
    font-size: 20px;
}
.index-list a{
    margin: 0 10px;
    font-size: 18px;
}
</style>
