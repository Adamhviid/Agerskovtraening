<script setup>
import Button from '../components/Button.vue'
import ReviewCarousel from '../components/ReviewCarousel.vue';
</script>

<template>
  <!-- <div class="banner-container">
    <img alt="banner" src="../assets/reviews/Amy Phillips.png" class="banner-image">
  </div> -->
  <div class="isolate bg-white">
    <div class="bg-white ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="text-3xl font-bold tracking-tight text-gray-900">
            PERSONLIG TRÆNING | ONLINE COACHING
          </p>
          <p class="text-md leading-8 text-gray-600">
            FysioDanmark Hillerød & Smiley Fitness
          </p>
          <h4 class="text-base font-bold mt-5">
            En professionel vurdering og anbefaling - Dit valg og din indsats.
          </h4>
          <Button to="/kontakt" text="Start din rejse her"></Button>
        </div>
        <div class="mx-auto mt-1 max-w-2xl lg:mt-5 lg:max-w-4xl">
          <div class="relative mt-3">
            Få maksimalt ud af din indsats! Personlig træning / online coaching er en investering i din fremtid. Din læren
            om træning, kost og tilgangen hertil er en lifeskill, som du kan tage med dig resten af livet og lære videre
            til din familie.
          </div>
          <div class="relative mt-3">
            Vil du gerne have en stærkere krop, mere muskelmasse og mere funktionalitet? Sammen gør vi målet realistisk og
            du vil opleve fremskridt fra gang til gang.
          </div>
          <Button to="/forloeb" text="Læs mere om forløb her"></Button>
          <div>
            <p class="mt-8 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              MED PHILIP SOM TRÆNER
            </p>
            <div class="">
              <div class="relative mt-1">
                Dine resultater er lettere opnået, og rejsen er mere givende, end du tror.
              </div>
              <div class="relative mt-1">
                Som ung bliver mange spurgt om hvad man vil arbejde med, men jeg mener der bør være nogle spørgsmål inden
                da:
              </div>
              <div class="relative mt-1">
                1. Hvad gør dig glad? <br />
                2. Hvordan kommer du dertil? <br />
                3. Hvordan gør du det bedst muligt? <br />
              </div>
              <div class="relative mt-1">
                Mit svar var “at hjælpe andre mennesker” og det ville jeg gøre gennem fysioterapi. Sidenhen har jeg fundet
                ud af at personlig træning er en lige så god vej, hvis ikke bedre, til at hjælpe andre til at nå deres
                mål.
                <div class="relative mt-1">
                  Hvad er dit mål? Hvordan kommer du dertil? Hvordan når du det bedst muligt?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 mx-auto max-w-xl">
          <!-- <p class="mt-8 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            LÆS HVAD ANDRE MENER
          </p> -->
          <ReviewCarousel />
          <div class="mt-5">
            <a href="https://dk.trustpilot.com/review/agerskovtraening.dk" target="_blank" class="font-semibold">
              <button class="bg-blue-950 hover:text-[#32579a] text-white font-bold py-2 px-4 rounded-full">
                Læs mere her på trustpilot
              </button>
            </a>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.banner-container {
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: center;
}
</style>
