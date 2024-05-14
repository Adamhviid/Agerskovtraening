<template>
    <div>
        <button @click="show = true">{{ title }}</button>
        <div
            v-if="show"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-5 rounded-lg w-[90%] h-[90%] overflow-auto">
                <div class="flex justify-between">
                    <h2 class="text-xl font-semibold text-black">{{ title }}</h2>
                    <button
                        @click="close"
                        class="text-xl font-semibold text-black">
                        &times;
                    </button>
                </div>
                <iframe
                    class="mt-5"
                    :src="pdfUrl"
                    style="width: 100%; height: 95%"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        pdfUrl: String,
        show: Boolean,
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        close() {
            this.show = false;
        },
    },
};
</script>

<style lang=""></style>