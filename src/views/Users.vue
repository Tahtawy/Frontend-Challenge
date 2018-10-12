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
    components: {
        "user-list": UserList,
        "user-details": UserDetails
    }
}
</script>