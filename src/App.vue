<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body{
    background: url(./assets/pale-stripe.jpg);
  }
</style>
