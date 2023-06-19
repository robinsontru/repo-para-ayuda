<template>

    <nav-comp></nav-comp>
    <InformacionmetodosComp></InformacionmetodosComp>
    <footer-comp></footer-comp>
    
</template>

<script>
import InformacionmetodosComp from '@/components/InformacionmetodosComp.vue';
import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue';

export default {
  components: { NavComp, InformacionmetodosComp, FooterComp },
    name:'VistainformacionView'
}
</script>