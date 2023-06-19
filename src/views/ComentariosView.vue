<template>
    <nav-comp></nav-comp>
    <comentarios-comp></comentarios-comp>
    <footer-comp></footer-comp>
   

</template>
<script>
import ComentariosComp from '../components/ComentariosComp.vue'
import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  components: { NavComp, FooterComp ,ComentariosComp},
    name:'ComentariosView'
}
</script>
<style scoped>

</style>