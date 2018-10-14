<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>

import Navigation from "./components/layout/NabigationBar.vue";
import Footer from "./components/layout/Footer.vue";

export default {
    components: {
        "navigation-bar": Navigation,
        "page-footer": Footer
    }
}
</script>


<style lang="scss">
    @import "./assets/sass/base.scss";
</style>
