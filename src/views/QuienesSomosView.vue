<template>
    <nav-comp></nav-comp>
    
    <h1>Aqi va el calendar</h1>
    <agenda-l-fcom></agenda-l-fcom>
    
    <footer-comp></footer-comp>
</template>
<script>

import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import AgendaLFcom  from '../components/DashboardaprendizEnfermera/AgendaLFcom.vue'

export default {
  components: { NavComp, FooterComp,AgendaLFcom },
   name:'QuienesSomosView' ,
  

}
</script>

<style scoped>

</style>