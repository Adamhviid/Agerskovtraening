<template>
    <header class="bg-black bg-opacity-30 text-white top-0 w-full z-50">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-3">
            <div class="flex lg:flex-1">
                <router-link
                    to="/"
                    class="text-sm font-semibold leading-6 flex items-center">
                    <img
                        class="h-12 w-auto mr-2"
                        src="/favicon.ico"
                        alt="" />
                    <!-- <span class="text-xl">Forside</span> -->
                </router-link>
            </div>

            <div class="lg:flex lg:gap-x-12" v-if="!isMobile || showMenu">
                <ul v-if="isMobile" class="">
                    <li class="p-1">
                        <router-link
                            to="/#programs"
                            @click.native="scrollTo('programs')"
                            class="text-lg font-semibold leading-6 hover:text-[#32579a]">
                            Forløb
                        </router-link>
                    </li>
                    <li class="p-1">
                        <router-link
                            to="/#colabs"
                            @click.native="scrollTo('colabs')"
                            class="text-lg font-semibold leading-6 hover:text-[#32579a]">
                            Samarbejdspartnere
                        </router-link>
                    </li>
                    <li class="p-1">
                        <router-link
                            to="/kontakt"
                            class="text-lg font-semibold leading-6 hover:text-[#32579a]">
                            Kom i kontakt her!
                        </router-link>
                    </li>
                </ul>
                <div v-else class="hidden lg:flex lg:gap-x-12">
                    <router-link
                        to="/#programs"
                        @click.native="scrollTo('programs')"
                        class="text-lg font-semibold leading-6 hover:text-[#32579a]">
                        Forløb
                    </router-link>
                    <router-link
                        to="/#colabs"
                        @click.native="scrollTo('colabs')"
                        class="text-lg font-semibold leading-6 hover:text-[#32579a]">
                        Samarbejdspartnere
                    </router-link>
                    <router-link
                        to="/kontakt"
                        class="text-lg font-semibold leading-6 hover:text-[#32579a]">
                        Kom i kontakt her!
                    </router-link>
                </div>
            </div>

            <div v-else @click="showMenu = !showMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMobile: false,
            showMenu: false,
        };
    },
    methods: {
        scrollTo(id) {
            this.$nextTick(() => {
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 250); // delay in milliseconds
            });
        },
        checkIsMobile() {
            this.isMobile = window.innerWidth < 1024;
        },
    },
    created() {
        window.addEventListener('resize', this.checkIsMobile);
        this.checkIsMobile();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkIsMobile);
    },
};
</script>

<style>
@media (max-width: 1024px) {
    .lg\:flex {
        display: flex;
    }

    .lg\:hidden {
        display: none;
    }

    .lg\:gap-x-12 {
        gap: 1.5rem;
    }
}
</style>