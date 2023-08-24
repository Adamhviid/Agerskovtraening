<script setup>
import TrustPilot from '../components/TrustPilot.vue';
const features = [
  {
    titel: "Skadeforebyggelse - primært knæ og skuldre.",
    description: "Min baggrund som svømmer har sat sit spor på mine skuldrer, så jeg ved hvordan det føles og har selv været rigtig meget genoptræning og forebyggelse igennem. Tilmed har jeg altid døjet med irriterede knæ, men efter jeg er dykket ind i hvordan man styrker dem har der aldrig været mere."
  },
  {
    titel: "Muskelmasse",
    description: "Jeg træner selv rigtig meget og specielt body building. Tilmed er jeg meget nørdet og læser mange studier, så min træning altid er up-to-date med de seneste studier."
  },
  {
    titel: "Opstart",
    description: "Jeg ved hvordan det føles at starte uden at vide hvad man laver. Hvis man ikke får noget ud af det heller, føles det bare mere ligegyldigt. Det er min vision at mindske den følelse!"
  }
]
</script>

<template>
  <div class="banner-container">
    <img alt="banner" src="../assets/banner.jpeg" class="banner-image">
  </div>
  <div class="isolate bg-white">
    <div class="bg-white py-5 sm:py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            PHILIP AGERSKOV - PERSONLIG TRÆNER
          </p>
          <p class="text-lg leading-8 text-gray-600">
            Som klient hos mig, vil du opleve 1:1 sparring.
          </p>
          <h4 class="text-base font-bold mt-5 underline">
            Jeg specialiserer mig i:
          </h4>
        </div>
        <div class="mx-auto mt-3 max-w-2xl sm:mt-20 lg:mt-5 lg:max-w-4xl">
          <div v-for="feature in features" :key="feature.titel" class="relative mt-3">
            <div class="w-full">
              <dt class="text-2xl font-bold leading-10 text-gray-900 ">
                {{ feature.titel }}
              </dt>
              <dd class="mt-1 text-1 leading-7 text-gray-700">
                {{ feature.description }}
              </dd>
            </div>
          </div>
        </div>
        <div class="relative hidden sm:block">
          <img src="../assets/blueBackground.jpeg" alt="blueBackground" class="w-full mt-10">
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div class="w-2/4 p-4">
              <p class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Book en aftale
              </p>
              <p class="text-lg leading-8 text-white">
                Her kan du se mere om mine forløb og services. Der er bestemte forløb, men de er ikke fastlagt, så tag
                gerne
                kontakt hvis vi skal finde ud af en anden fremgangsmåde eller bare flere gange om måneden.
              </p>
              <div class="">
                <button class="mt-5 bg-white text-blue-950 font-bold py-2 px-4 rounded float-left">
                  <router-link to="/forloeb">Se mere</router-link>
                </button>
                <button class="mt-5 bg-white text-blue-950 font-bold py-2 px-4 rounded float-right">
                  <router-link to="/kontakt">kontakt</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <TrustPilot />
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
