<template>
    <section :id="scrollId">
        <div
            class="flex justify-center items-center w-full bg-fixed bg-cover h-52 bg-center bg-no-repeat bg-[url('../src/assets/img/wed-3.jpg')]"
        >
            <div class="absolute z-0 w-full h-52 bg-gray-900 opacity-[0.5]" />
            <h2 class="section-title-large z-10">Reception</h2>
        </div>
        <div class="mx-auto max-w-7xl my-60 flex flex-col gap-4 text-center">
            <span class="text-2xl uppercase font-medium text-gray-800">
                Crisanta Function Hall
            </span>
            <span class="participant-name">
                Atega Subdivision, Cabadbaran City
            </span>
        </div>
    </section>
</template>
<script>
import { RECEPTION_SECTION } from "./section.names.ts";
export default {
    name: RECEPTION_SECTION,
    data() {
        return {
            scrollId: RECEPTION_SECTION,
        };
    },
};
</script>
