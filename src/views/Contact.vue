<template>
  <div class="isolate bg-white px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kom i kontakt</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">en tekst hernede?</p>
    </div>
    <form @submit.prevent="sendEmail" class="mx-auto mt-5 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Navn</label>
          <div class="mt-2.5">
            <input type="text" name="name" id="name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Spørgsmål eller Besked</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-7">
        <button type="submit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span v-if="!loading">Send</span>
          <div v-else class="flex justify-center">
            <div class="w-5 h-5 border-2 border-indigo-200 rounded-full animate-spin"></div>
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
//https://dashboard.emailjs.com/admin/account
import emailjs from 'emailjs-com';

export default {
  name: 'ContactMe',
  data() {
    return {
      email: '',
      name: '',
      message: '',
      loading: false,
    }
  },
  methods: {
    async sendEmail() {
      this.loading = true;
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          {
            email: this.email,
            name: this.name,
            message: this.meessage
          }
        );
      } catch (error) {

        console.error(error);
      }

      this.loading = false;
      this.email = '';
      this.name = '';
      this.message = '';
    },
  }
}
</script>
