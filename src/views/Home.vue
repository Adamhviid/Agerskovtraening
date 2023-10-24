<script setup>
import Button from '../components/Button.vue'
import ReviewCarousel from '../components/ReviewCarousel.vue';
</script>

<template>
    <div class="info">
        <div class="banner-container">
            <img alt="banner" src="../assets/new/banner.jpeg" class="banner-image mx-auto" />
        </div>
        <div class="white w-3/4 mx-auto mt-64 lg:px-8">
            <p class="text-6xl font-bold tracking-tight text-white lg:text-center">
                AGERSKOVTRÆNING
            </p>
            <p class="text-4xl mt-10 font-bold tracking-tight text-white">
                PERSONLIG TRÆNING | ONLINE COACHING
            </p>
        </div>

        <div class="box text">
            <div class="mx-auto max-w-2xl lg:text-center">
                <p class="text-md leading-8">
                    FysioDanmark Hillerød & Smiley Fitness
                </p>
                <h4 class="text-base font-bold mt-5">
                    En professionel vurdering og anbefaling - Dit valg og din indsats.
                </h4>
                <Button to="/kontakt" text="Start din rejse her"></Button>
            </div>
        </div>

        <div class="box">
            <div class="text relative">
                Få maksimalt ud af din indsats! Personlig træning / online coaching er en investering i din fremtid.
                Din læren
                om træning, kost og tilgangen hertil er en lifeskill, som du kan tage med dig resten af livet og
                lære videre
                til din familie.
            </div>
            <div class="relative mt-3">
                Vil du gerne have en stærkere krop, mere muskelmasse og mere funktionalitet? Sammen gør vi målet
                realistisk og
                du vil opleve fremskridt fra gang til gang.
            </div>
        </div>

        <div class="box">
            <h1 class="mt-8 font-bold tracking-tight sm:text-3xl">
                MED PHILIP SOM TRÆNER
            </h1>
            <div class="mt-3 relative mt-1">
                Dine resultater er lettere opnået, og rejsen er mere givende, end du tror.
            </div>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="mt-16 text-left">
                    <div class="relative mt-5">
                        Som ung bliver mange spurgt om hvad man vil arbejde med, men jeg mener der bør være nogle
                        spørgsmål inden da:
                    </div>
                    <div class="mt-10">
                        <div class="mt-2">
                            1. Hvad gør dig glad?
                        </div>
                        <div class="mt-2">
                            2. Hvordan kommer du dertil?
                        </div>
                        <div class="mt-2">
                            3. Hvordan gør du det bedst muligt?
                        </div>
                    </div>
                </div>
                <div class="md:text-right">
                    <img src="../assets/new/image00004.jpeg" alt="Your Image" class="max-w-full h-auto" />
                </div>
            </div>
            <div class="relative mt-5">
                Mit svar var “at hjælpe andre mennesker” og det ville jeg gøre gennem fysioterapi. Sidenhen
                har jeg fundet ud af at personlig træning er en lige så god vej, hvis ikke bedre, til at hjælpe
                andre til
                at nå deres mål.
                <div class="relative mt-5">
                    Hvad er dit mål? Hvordan kommer du dertil? Hvordan når du det bedst muligt?
                </div>
            </div>

        </div>
        <div class="box" style="width: 50%">
            <ReviewCarousel />
            <a href="https://dk.trustpilot.com/review/agerskovtraening.dk" target="_blank" class="font-semibold mt-5">
                <button class="bg-blue-950 hover:text-[#32579a] text-white font-bold py-2 px-4 rounded-full">
                    Læs mere på trustpilot
                </button>
            </a>
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #000000;
}

.banner-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}

.box {
    background-color: rgba(0, 0, 0, 0.7);
    /* 80% transparent white background */
    padding: 2rem;
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24rem;
    font-size: 1.5rem;
    color: white;
}
</style>
