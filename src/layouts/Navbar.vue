<template>
    <section class="z-20 absolute w-full">
        <div class="layout-margin flex justify-between">
            <ul class="text-primary text-xl flex gap-4 md:gap-10 font-medium">
                <li
                    class="hover:underline uppercase cursor-pointer"
                    v-for="item in navOptions"
                    @click="scrollIntoView(item.scrollId)"
                >
                    {{ item.name }}
                </li>
            </ul>
            <ul class="text-primary text-xl flex gap-4 md:gap-10 font-medium">
                <li
                    class="hover:underline uppercase cursor-pointer"
                    v-for="item in pageOptions"
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
export default {
    name: "Navbar",
    data() {
        return {
            navOptions: [
                { name: "Ceremony", scrollId: "ceremony-section" },
                { name: "Reception", scrollId: "reception-section" },
            ],
            pageOptions: [
                { name: "Invitation", scrollId: "invitation-section" },
            ],
        };
    },
    methods: { scrollIntoView },
};
</script>
<style lang=""></style>
