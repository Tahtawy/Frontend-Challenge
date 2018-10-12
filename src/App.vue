<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/layout/NabigationBar.vue";
export default {
    components: {
        "navigation-bar": Navigation
    }
}
</script>


<style lang="scss">
    @import "./assets/sass/base.scss";
</style>
