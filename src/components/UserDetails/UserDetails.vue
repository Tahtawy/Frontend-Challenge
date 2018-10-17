<template>

    <section class="user-details">

        <div class="user-details__title">
            <h3 class="user-details__h3">user's details</h3>
        </div>

        <div class="loading-screen" v-show="loadingState">
            <div class="loading"></div>
        </div>

        <div class="user-details__body" v-show="!loadingState">
            <img :src="userDetails.avatar_url" alt="user-details-avatar" class="user-details__image">
            <div class="name-and-id">
                <p class="user-details__name">{{ userDetails.login }}</p>
                <em class="user-details__id">@id:{{ userDetails.id }}</em>
            </div>
            <div class="user-details__email">
                <label class="user-details__label">email:</label>
                <span class="user-details__value">{{ (!userDetails.email) ? "private email" : userDetails.email }}</span>
            </div>
            <div class="user-details__created-at">
                <label class="user-details__label">created at:</label>
                <span class="user-details__value">{{ userDetails.created_at }}</span>
            </div>
        </div>

    </section>

</template>

<script src="./userDetails.js"></script>
<style lang="scss" src="./userDetails.scss"></style>

