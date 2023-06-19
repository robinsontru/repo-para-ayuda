<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HomeComp></HomeComp>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeComp from '@/components/HomeComp.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HomeComp
}
}
</script>
