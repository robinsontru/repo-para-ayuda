<template>
   <nav-comp></nav-comp>
   <ConoceteyCuidateComp/>
   <footer-comp></footer-comp>
  
</template>
<script>


import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import ConoceteyCuidateComp from '@/components/ConoceteyCuidateComp.vue'
export default {
  components: { NavComp, FooterComp, ConoceteyCuidateComp },
   name:'ConoyCuidateView' 
}
</script>

<style scoped>

</style>