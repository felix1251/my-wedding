<template>
    <section class="z-20 absolute w-full">
        <div class="layout-margin flex justify-between">
            <ul
                class="text-primary text-xl flex justify-center w-full flex-col md:flex-row text-center md:text-start gap-1.5 md:gap-10 font-medium"
            >
                <li
                    class="md:hover:underline uppercase cursor-pointer"
                    v-for="item in navOptions"
                    @click="scrollIntoView(item.scrollId)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">
import { scrollIntoView } from "../utilities";
import {
    PARTICIPANT_SECTION,
    CEREMONY_SECTION,
    RECEPTION_SECTION,
} from "../sections/section.names.ts";

export default {
    name: "Navbar",
    data() {
        return {
            navOptions: [
                { name: "Participants", scrollId: PARTICIPANT_SECTION },
                { name: "Ceremony", scrollId: CEREMONY_SECTION },
                { name: "Reception", scrollId: RECEPTION_SECTION },
            ],
        };
    },
    methods: { scrollIntoView },
};
</script>
<style lang=""></style>
