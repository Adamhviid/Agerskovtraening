<script>
import makker from '../assets/makker.png';
import online from '../assets/online.png';
import pt from '../assets/pt.png';
import tp from '../assets/tp.png';

import Button from '../components/Button.vue'

export default {
  data() {
    return {
      items: [
        {
          image: pt,
          title: 'GRATIS OG UFORPLIGTENDE SAMTALE',
          subtitle: 'Sparringssamtale | Afklaring | Gratis træningsprogram',
          description: 'Sparring og forventningsafstemning om dine mål og vejen dertil. Sammen finder vi ud af hvordan mulighederne ligger og hvordan jeg kan hjælpe dig. Jeg lærer dig at kende og du lærer mig at kende. Det er altid en hyggelig samtale og du går aldrig tomhændet derfra.',
          price: '0,-'
        },
        {
          image: tp,
          title: 'PRIVAT FORLØB',
          subtitle: 'Superviseret træning | Online vejledning | personaliseret træningsprogram | Kostvejledning',
          description: 'I samarbejde med mig, sikrer vi at du får maksimal value af din indsats og når dine mål. Vi tager skridtet videre i en blanding af fysiske sessioner, ugentlige online check-ins og en masse sparring undervejs.',
          price: '1.600,-'
        },
        {
          image: makker,
          title: 'MAKKER FORLØB',
          subtitle: 'Superviseret træning | Online vejledning | personaliserede træningsprogrammer | Kostvejledning',
          description: 'Privat forløb, men med din træningsbuddy! Vi skruer op for det sociale og tilrettelægger træningen til jer begge, så I kan være sammen om det, men stadig træne hvert for sig når det ikke passer med et team-up.',
          extra_description: "I sparer hver 25% på forløb her.",
          price: '1.200,-/person'
        },
      ]
    };
  },
  components: {
    Button
  }
};
</script>

<template>
  <div class="isolate bg-white">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mt-3 max-w-2xl sm:mt-20 lg:mt-5 lg:max-w-4xl">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Forløb & Træningsprogrammer
          </h1>
          <p class="mt-5">
            Her har du et overblik over mine forløb. Hvis der er nogen tvil er du altid velkommen til at skrive til mig
            via
            mail, instagram eller kontaktformularen.
          </p>
          <div v-for="(item, index) in items" :key="index">
            <div class="mt-5 p-3 bg-blue-950 text-white relative h-auto w-200 ">
              <img :src="item.image" alt="Row Image" class="h-32 w-32 mx-auto mb-4 rounded-full">
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <h3 class="text-md font-semibold mb-2">{{ item.subtitle }}</h3>
              <p class="mt-2">{{ item.description }}</p>
              <p class="mt-2">{{ item.extra_description }}</p>
              <p class="mt-2">priser fra {{ item.price }}</p>
              <div class="p-3">
                <router-link to="/kontakt">
                  <button class="bg-white hover:text-[#32579a] text-black font-bold py-2 px-4 rounded-full">
                    book nu
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
