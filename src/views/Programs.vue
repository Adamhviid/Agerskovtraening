<template>
  <div class="isolate bg-white">
    <div class="bg-white py-5 sm:py-10">
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
          <div class="grid mt-10 grid-cols-1 gap-4 md:grid-cols-4">
            <div v-for="(item, index) in items" :key="index">
              <img :src="item.image" alt="Row Image" class="h-32 w-32 mx-auto mb-4 rounded-full">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import makker from '../assets/makker.png';
import online from '../assets/online.png';
import pt from '../assets/pt.png';
import tp from '../assets/tp.png';

export default {
  data() {
    return {
      items: [
        {
          image: pt,
          title: 'Fysisk Forløb',
          description: 'Tag skridtet videre og køb et forløb til personlig træning.Sammen skaber vi rammerne for maksimalt udbytte.'
        },
        {
          image: makker,
          title: 'Makker Forløb',
          description: 'Traditionel personlig træning med din træningsbuddy og spar penge! I sparer 25% hver på forløb ved køb af makker forløb.'
        },
        {
          image: online,
          title: 'Online Forløb',
          description: 'Få guiding tips, opfølgning og meget mere ligemeget hvor i DK du er. Med videosamtaler og video af øvelser, sørger vi for at få dig top tunet.'
        },
        {
          image: tp,
          title: 'Træningsprogram',
          description: 'Køb et træningsprogram som passer til dine ugentlige træninger.'
        }
      ]
    };
  }
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
