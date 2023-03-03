<template>
    <section
        id="image-section"
        class="z-0 w-full bg-cover bg-fixed h-screen md:bg-top bg-center bg-no-repeat bg-[url('../src/assets/img/wed-main.jpeg')]"
    >
        <div class="absolute z-0 w-full h-screen bg-gray-900 opacity-[0.5]" />
        <div
            class="font-sans relative text-9xl flex gap-1.5 lg:gap-10 flex-col lg:flex-row flex-wrap justify-center items-center h-full text-primary layout-margin"
        >
            <span> Felix </span>
            <span> & </span>
            <span> Lyra </span>
        </div>
        <ScrollDownIcon
            @click="scrollIntoView('ceremony-section')"
            class="cursor-pointer text-primary w-11 absolute m-auto left-0 right-0 bottom-10"
        />
    </section>
</template>
<script>
import ScrollDownIcon from "../components/ScrollDownIcon.vue";
import { scrollIntoView } from "../utilities";

export default {
    name: "Image Section",
    components: {
        ScrollDownIcon,
    },
    methods: {
        scrollIntoView,
    },
};
</script>
