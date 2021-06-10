<template>
  <div id="app">
    <!-- router-link用于标识路径, 最终会被渲染成a标签 -->
    <p>通过router-link标签改变url:</p>
    <router-link to="/home" tag="button" replace active-class="active">Home</router-link>
    <router-link to="/about" tag="button" replace active-class="active">About</router-link>
    <br>
    <!-- 如果一定要用button a 等标签 而非router-link标签来修改路径 -->
    <p>通过其它标签+click事件监听的方式, 调用方法改变url:</p>
    <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>

    <!--  -->
    
    <!-- router-view用于占位, 决定路由到的组件显示到什么位置 -->
    <router-view></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick(){
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
  /* 当选中某个router-link时, 会给渲染出的对应标签加上两个class: router-link-active和router-link-exact-active */
  /* 因此可以在style中, 对选中后标签做一些样式变更 */
  .router-link-active {
    color: #f00;
  }
  .active{
    color: rgb(58, 58, 155)
  }
</style>
