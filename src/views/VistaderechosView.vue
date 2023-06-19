<template>

    <nav-comp></nav-comp>
    <derechos-comp></derechos-comp>
    <footer-comp></footer-comp>

</template>

<script>
import NavComp from '@/components/NavComp.vue'
import DerechosComp from '@/components/DerechosComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: { NavComp, DerechosComp, FooterComp },
    name:'VistaderechosView'
}
</script>