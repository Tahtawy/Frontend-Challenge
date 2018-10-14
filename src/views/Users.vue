<template>
    <main class="user-main">
        <user-list></user-list>
        <user-details :loadingState="isUserLoading" :userDetails="currentUserObject"></user-details>
    </main>
</template>

<script>

import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

export default {
    data: function () {
        return {
            firstUserId: null,
            isUserLoading: false,
            currentUserObject: {}
        }
    },
    watch: {
        $route (){

            this.isUserLoading = true; // Show loading screen

            if (!this.$route.params.login) { // If route is '/user'
                this.$store.commit('Current_User_Id', this.firstUserId);
            }
            else { // If route is 'user/{login}'
                this.$store.commit('Current_User_Id', this.$route.params.login);
            }

            this.$store.getters.currentUserObject.then((response) => {
                this.currentUserObject = response; // update shown user
                this.isUserLoading = false; // hide loading screen
            });

        }
    },
    components: {
        "user-list": UserList,
        "user-details": UserDetails
    },
    async mounted () {

        // get first user login.
        this.firstUserId = await this.$store.getters.firstUserId.then((response) => {
            return response;
        });

        this.isUserLoading = true; // Show loading screen

        if(!this.$route.params.login) { // if route is '/user'.

            // show first user details.
            this.$store.commit('Current_User_Id', this.firstUserId);
            await this.$store.getters.currentUserObject.then((response) => {
                this.currentUserObject = response;
                this.isUserLoading = false; // hide loading screen
            });

        }
        else { // if route is '/user/{login}'.

            // show selected user
            this.$store.commit('Current_User_Id', this.$route.params.login);
            await this.$store.getters.currentUserObject.then((response) => {
                this.currentUserObject = response;
                this.isUserLoading = false; // hide loading screen
            });

        }
    }
}
</script>

<style lang="scss">
    .user-main {
        @include make-row;
        background-color: #EDF2F5;
        height: 100vh;
        max-height: 100vh;
        padding: 5rem 2rem 1rem;
    }
</style>
