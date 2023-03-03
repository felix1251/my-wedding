<template>
    <Navbar />
    <ImageSection />
    <CeremonySection />
    <ReceptionSection />
    <InvitationSection />
</template>

<script lang="ts">
import Navbar from "../layouts/Navbar.vue";
import ImageSection from "../sections/ImageSection.vue";
import CeremonySection from "../sections/CeremonySection.vue";
import ReceptionSection from "../sections/ReceptionSection.vue";
import InvitationSection from "../sections/InvitationSection.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        ImageSection,
        CeremonySection,
        ReceptionSection,
        InvitationSection,
    },
};
</script>
