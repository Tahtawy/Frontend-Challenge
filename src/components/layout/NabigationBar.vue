<template>
    <!-- Start Navigation Bar -->
    <nav class="navigation-bar">

        <a href="#" class="navigation-bar__logo">
            <img src="../../assets/images/logo.png" alt="logo-image" class="navigation-bar__image">
            <strong>Git</strong>Hub
        </a>

        <button class="navigation-bar__toggler" type="button" data-toggle="collapse" data-target="#collapseArea" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="collapseArea" class="navbar-collapse collapse">
            <ul class="navigation-list">
                <li class="navigation-list__item">
                    <router-link class="navigation-list__link" to="/">Home</router-link>
                </li>
                <li class="navigation-list__item">
                    <router-link class="navigation-list__link" to="/users">Users</router-link>
                </li>
                <li class="navigation-list__item">
                    <router-link class="navigation-list__link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
        
    </nav> 
    <!-- End Navigation Bar -->
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    @import "../../assets/sass/layout/_navigation-bar.scss";
</style>


