<template>
    <section class="user-details">

        <div class="user-details__title">
            <h3 class="user-details__h3">user's details</h3>
        </div>

        <div class="loading-screen" v-show="isLoading">
            <div class="loading"></div>
        </div>

        <div class="user-details__body" v-show="!isLoading">
            <img :src="currentUser.avatar_url" alt="user-details-avatar" class="user-details__image">
            <div class="name-and-id">
                <p class="user-details__name">{{ currentUser.login }}</p>
                <em class="user-details__id">@id:{{ currentUser.id }}</em>
            </div>
            <div class="user-details__email">
                <label class="user-details__label">email:</label>
                <span class="user-details__value">mght29@gmail.com</span>
            </div>
            <div class="user-details__created-at">
                <label class="user-details__label">created at:</label>
                <span class="user-details__value">{{ createdAt }}</span>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data: function () {
        return {
            currentUser: {},
            createdAtDate: '',
            isLoading: false
        }
    },
    computed: {
        createdAt: function () {
            return this.createdAtDate.substr(0, this.createdAtDate.indexOf('T'))
        }
    },
    watch: {
        $route (to, from){
            let routeLoginParameter = this.$route.params.login;
            if(routeLoginParameter)
                this.fetchUserData(this.$route.params.login);
            else 
                this.fetchUserData('mojombo');
        }
    },
    methods: {
        fetchUserData(login) {
            this.isLoading = true;
            this.$http.get('https://api.github.com/users/'+login).then((response) => {
                this.currentUser = response.data;
                this.createdAtDate = response.data.created_at;
                this.isLoading = false;
            })
        }
    },
    mounted: function () {
        this.fetchUserData('mojombo');
    }
}
</script>

<style lang="scss">
    @import "../assets/sass/components/_users-details.scss";
    .loading-screen {
        align-items: center;
        background-color: white;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 66px;
        width: 100%;
    }

    $base-line-height: 50px;
    $white: rgb(255,255,255);
    $off-white: rgba($white, 0.2);
    $spin-duration: 1s;
    $pulse-duration: 750ms;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        border-radius: 50%;
        width: $base-line-height;
        height: $base-line-height;
        border: .25rem solid rgba($blue, 0.2);
        border-top-color: $blue;
        animation: spin $spin-duration infinite linear;
    }
</style>
