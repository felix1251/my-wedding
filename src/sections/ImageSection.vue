<template>
    <section
        :id="scrollId"
        class="z-0 w-full bg-cover bg-fixed h-screen md:bg-top bg-center bg-no-repeat bg-[url('../src/assets/img/main.png')]"
    >
        <div class="absolute z-0 w-full h-screen bg-gray-900 opacity-[0.5]" />
        <div
            class="uppercase font-sans relative text-9xl lg:text-[11rem] flex gap-1.5 lg:gap-10 flex-col lg:flex-row flex-wrap justify-center items-center h-full text-primary layout-margin"
        >
            <span> Lyra </span>
            <span> & </span>
            <span> Felix </span>
        </div>
        <ScrollDownIcon
            @click="scrollIntoView(PARTICIPANT_SECTION)"
            class="cursor-pointer text-primary w-11 absolute m-auto left-0 right-0 bottom-10"
        />
    </section>
</template>

<script lang="ts">
import ScrollDownIcon from "../components/ScrollDownIcon.vue";
import { scrollIntoView } from "../utilities";
import { IMAGE_SECTION, PARTICIPANT_SECTION } from "./section.names.ts";

export default {
    name: IMAGE_SECTION,
    data() {
        return {
            scrollId: IMAGE_SECTION,
            PARTICIPANT_SECTION,
        };
    },
    components: {
        ScrollDownIcon,
    },
    methods: {
        scrollIntoView,
    },
};
</script>
