<template>
    <router-view />
    <!-- <PageLoader /> -->
</template>

<script lang="ts">
import PageLoader from "./components/PageLoader.vue";
export default {
    name: "App",
    components: {
        PageLoader,
    },
};
</script>
