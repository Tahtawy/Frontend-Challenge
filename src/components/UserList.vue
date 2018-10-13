<template>
    <aside class="sidebar">

        <div class="sidebar__title">
            <h3 class="sidebar__h3">users list</h3>
        </div>

        <div class="loading-screen" v-show="isLoading">
            <div class="loading"></div>
        </div>

        <ul class="sidebar__users-list" v-show="!isLoading">
            <li class="sidebar__user-item"
                :class="{'sidebar--active-user':(selectedId === user.login)}"
                @click="updateUserDetails(user.login)"
                v-for="user in users"
                :key="user.id">
                <img :src="user.avatar_url" alt="user-image" class="sidebar__user-image">
                <span class="sidebar__user-name">{{ user.login }}</span>
            </li>
        </ul>

        <div class="sidebar__load-more">
            <button class="btn btn-primary" @click="getMoreUsers">Load More</button>
        </div>

    </aside>
</template>

<script>
export default {
    data: function () {
        return {
            users: [],
            startId: 0,
            selectedId: null,
            usersPerPage: 20,
            isLoading: false
        }
    },
    methods: {
        getMoreUsers: function () {
            this.fetchUserChucnk(this.startId);
        },
        updateUserDetails: function (login) {
            this.selectedId = login;
            this.$router.push({ name: 'userDetails', params: {login:login} });
        },
        fetchUserChucnk: function (startId) {
            this.isLoading = true;
            this.$http.get('https://api.github.com/users?since='+startId+'&per_page='+this.usersPerPage).then((response) => {
                let newUsersChuck = response.data;
                this.users = [...this.users, ...newUsersChuck];
                this.startId = newUsersChuck[newUsersChuck.length - 1].id;
                if(startId == null) {
                    this.selectedId = this.users[0].login;
                }
                this.isLoading = false;
            })
        }
    },
    mounted: function() {
        this.fetchUserChucnk(null);
    } 
}
</script>

<style lang="scss">
    @import "../assets/sass/components/_users-list.scss";
    .loading-screen {
        align-items: center;
        background-color: white;
        display: flex;
        height: 70%;
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

