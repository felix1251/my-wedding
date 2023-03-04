<template>
    <div class="container-loader">
        <div class="relative wrapper"></div>
        <div class="absolute loader"></div>
    </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped lang="css">
.container-loader {
    @apply h-screen w-full flex justify-center items-center bg-gray-100 fixed inset-0 z-50;
}
.wrapper {
    @apply rounded-full w-[200px] h-[200px] bg-[url('../src/assets/img/wed-main.jpeg')] bg-center bg-no-repeat bg-cover;
}
.loader {
    @apply rounded-full w-[225px] h-[225px] border-[15px] border-primary;
    animation: fill linear 4s;
}
@keyframes fill {
    0% {
        clip-path: polygon(
            50% 0%,
            50% 50%,
            50% 0%,
            50% 0%,
            50% 0%,
            50% 0%,
            50% 0%
        );
    }
    12.5% {
        clip-path: polygon(
            50% 0%,
            50% 50%,
            100% 0%,
            100% 0%,
            100% 0%,
            100% 0%,
            100% 0%
        );
    }
    37.5% {
        clip-path: polygon(
            50% 0%,
            50% 50%,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 0%
        );
    }
    62.5% {
        clip-path: polygon(
            50% 0%,
            50% 50%,
            0% 100%,
            0% 100%,
            0% 100%,
            100% 100%,
            100% 0%
        );
    }
    87.5% {
        clip-path: polygon(
            50% 0%,
            50% 50%,
            0% 0%,
            0% 0%,
            0% 100%,
            100% 100%,
            100% 0%
        );
    }
    100% {
        clip-path: polygon(
            50% 0%,
            50% 50%,
            50% 0%,
            0% 0%,
            0% 100%,
            100% 100%,
            100% 0%
        );
    }
}
</style>
