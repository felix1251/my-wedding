<template>
    <section :id="scrollId" class="section-container">
        <h2 class="section-title">Ceremony</h2>
    </section>
</template>
<script>
import { CEREMONY_SECTION } from "./section.names.ts";
export default {
    name: "Ceremony Section",
    data() {
        return {
            scrollId: CEREMONY_SECTION,
        };
    },
};
</script>
