<template>
    <section :id="scrollId" class="section-container">
        <h2 class="section-title">Reception</h2>
    </section>
</template>
<script>
import { RECEPTION_SECTION } from "./section.names.ts";
export default {
    name: "Reception Section",
    data() {
        return {
            scrollId: RECEPTION_SECTION,
        };
    },
};
</script>
