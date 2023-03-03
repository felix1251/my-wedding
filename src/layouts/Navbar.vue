<template>
    <section class="z-20 absolute w-full">
        <div class="layout-margin">
            <ul
                class="text-primary text-lg flex gap-6 md:gap-10 font-medium cursor-pointer"
            >
                <li
                    class="hover:underline uppercase"
                    v-for="item in navOptions"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">
export default {
    name: "Navbar",
    data() {
        return {
            navOptions: [
                { name: "Ceremony" },
                { name: "Reception" },
                { name: "Invitation" },
            ],
        };
    },
};
</script>
<style lang=""></style>
