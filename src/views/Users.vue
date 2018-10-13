<template>
    <main class="main">
        <user-list></user-list>
        <user-details></user-details>
    </main>
</template>

<script>

import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

export default {
    data: function () {
        return {
            firstUserId: null
        }
    },
    watch: {
        $route (to, from){
            
        }
    },
    components: {
        "user-list": UserList,
        "user-details": UserDetails
    },
    async mounted () {
        this.firstUserId = await this.$store.getters.firstUserId.then((response) => {
            return response;
        });
    }
}
</script>