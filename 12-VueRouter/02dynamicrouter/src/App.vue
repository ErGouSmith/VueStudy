<template>
  <div id="app">
    <router-link to='/home' tag='button'>Home</router-link>
    <router-link to='/about' tag='button'>About</router-link>
    <router-link to='/user' tag='button'>User</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link-active{
    color:brown;
  }
</style>
