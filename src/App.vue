<template>
    <Navbar />
    <ImageSection />
    <CeremonySection />
</template>

<script lang="ts">
import Navbar from "./layouts/Navbar.vue";
import CeremonySection from "./sections/CeremonySection.vue";
import ImageSection from "./sections/ImageSection.vue";
export default {
    name: "App",
    components: {
        Navbar,
        ImageSection,
        CeremonySection,
    },
};
</script>
