<template>
    <Navbar />
    <ImageSection />
    <ParticipantSection />
    <CeremonySection />
    <ReceptionSection />
</template>

<script lang="ts">
import Navbar from "../layouts/Navbar.vue";
import ImageSection from "../sections/ImageSection.vue";
import CeremonySection from "../sections/CeremonySection.vue";
import ReceptionSection from "../sections/ReceptionSection.vue";
import ParticipantSection from "../sections/ParticipantSection.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        ImageSection,
        CeremonySection,
        ReceptionSection,
        ParticipantSection,
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollBtn = this.$refs.scrollTopButton;
            if (window.scrollY > 0) {
                scrollBtn.classList.remove("invisible");
            } else {
                scrollBtn.classList.add("invisible");
            }
        },
    },
};
</script>
