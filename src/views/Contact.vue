<template>
  <div class="isolate bg-white px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kom i kontakt</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Skriv endelig hvis du har nogle spørgsmål <br /> eller hvis vil høre mere om hvad jeg kan tilbyde.
      </p>
      <form @submit.prevent="sendEmail" class="mt-2">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">
              Fulde Navn
            </label>
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
          <div class="sm:col-span-2 justify-center">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">
              Hvad drejer din henvendelse sig om?
            </label>
            <!-- <div class="mt-2.5 text-left w-2/5 ">
              <radio class="">
                <input type="radio" name="category" value="Privat forløb">Privat forløb<input>
                <br />
                <input type="radio" name="category" value="Makker forløb">Makker forløb<input>
                <br />
                <input type="radio" name="category" value="Enkeltsession">Enkeltsession<input>
                <br />
                <input type="radio" name="category" value="Træningsprogram">Træningsprogram<input>
                <br />
                <input type="radio" name="category" value="Generelle spørgsmål">Generelle spørgsmål<input>
              </radio>
            </div> -->
            <div class="mt-2.5 text-center">
              <select id="category" name="category">
                <option selected disabled value="Vælg en kategori">Vælg en kategori</option>
                <option value="Privat forløb">Privat forløb</option>
                <option value="Makker forløb">Makker forløb</option>
                <option value="Enkeltsession">Enkeltsession</option>
                <option value="Træningsprogram">Træningsprogram</option>
                <option value="Generelle spørgsmål">Generelle spørgsmål</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
              Spørgsmål eller Besked
            </label>
            <div class="mt-2.5">
              <textarea name="message" id="message" rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
        <div class="mt-7">
          <button type="submit"
            class="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:text-[#32579a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span v-if="!loading">Send</span>
            <div v-else class="flex justify-center">
              <div class="w-5 h-5 border-2 rounded-full animate-spin"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
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
      category: '',
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
          document.querySelector('form'),
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          {
            email: this.email,
            name: this.name,
            category: this.category,
            message: this.message
          },
        ).then((result) => {
          alert("Tak for din besked, jeg vender tilbage hurtigst muligt")
          this.loading = false;
          this.name = '';
          this.email = '';
          this.category = '';
          this.message = '';
        }, (error) => {
          alert("Der skete en fejl, prøv venligst igen")
          console.log(error.text);
        });
      } catch (error) {
        console.error(error);
      }
      this.loading = false;
      this.email = '';
      this.name = '';
      this.category = '';
      this.message = '';
    }
  }
}
</script>
