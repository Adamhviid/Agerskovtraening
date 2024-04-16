<script setup>
import Layout from "../components/Layout.vue";
import Button from "../components/Button.vue";
/* import ReviewCarousel from '../components/ReviewCarousel.vue'; */
</script>

<template>
    <Layout>
        <div>
            <div class="headerbox">
                <p class="text-3xl font-bold tracking-tight text-white lg:text-center lg:text-6xl">AGERSKOVTRÆNING</p>
                <p class="text-2xl mt-10 font-bold tracking-tight text-white lg:text-4xl">PERSONLIG TRÆNING | ONLINE COACHING</p>
            </div>

            <div class="box">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <p class="text-md leading-8">FysioDanmark Hillerød & Smiley Fitness</p>
                    <h4 class="text-base font-bold mt-5">En professionel vurdering og anbefaling - Dit valg og din indsats.</h4>
                    <Button
                        to="/kontakt"
                        text="Start din rejse her"></Button>
                </div>
            </div>

            <div class="box">
                <h1 class="text-md mt-8 font-bold tracking-tight lg:text-2xl">Få maksimalt ud af din indsats!</h1>
                <div class="text relative">
                    Personlig træning / online coaching er en investering i din fremtid. Din læren om træning, kost og tilgangen hertil er en
                    lifeskill, som du kan tage med dig resten af livet og lære videre til din familie.
                </div>
                <div class="relative mt-3">
                    Vil du gerne have en stærkere krop, mere muskelmasse og mere funktionalitet? Sammen gør vi målet realistisk og du vil opleve
                    fremskridt fra gang til gang.
                </div>
            </div>

            <div class="box">
                <h1 class="mt-8 font-bold tracking-tight">MED PHILIP SOM TRÆNER</h1>
                <div class="mt-3 relative mt-1">Dine resultater er lettere opnået, og rejsen er mere givende, end du tror.</div>
                <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="mt-16">
                        <div class="relative">
                            Som ung bliver mange spurgt om hvad man vil arbejde med, men jeg mener der bør være nogle spørgsmål inden da:
                        </div>
                        <div class="mt-10">
                            <div class="mt-2">1. Hvad gør dig glad?</div>
                            <div class="mt-2">2. Hvordan kommer du dertil?</div>
                            <div class="mt-2">3. Hvordan gør du det bedst muligt?</div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="../assets/phillip1.jpeg"
                            alt="Your Image"
                            class="w-full max-w-64 h-auto" />
                    </div>
                </div>
                <div class="relative mt-5">
                    Mit svar var “at hjælpe andre mennesker” og det ville jeg gøre gennem fysioterapi. Sidenhen har jeg fundet ud af at personlig
                    træning er en lige så god vej, hvis ikke bedre, til at hjælpe andre til at nå deres mål.
                    <div class="relative mt-5">Hvad er dit mål? Hvordan kommer du dertil? Hvordan når du det bedst muligt?</div>
                </div>
            </div>
            <!-- <div class="box reviewbox mx-auto ">
                <ReviewCarousel />
                <a href="https://dk.trustpilot.com/review/agerskovtraening.dk" target="_blank"
                    class="font-semibold mt-5">
                    <button class="bg-blue-950 hover:text-[#32579a] text-white font-bold py-2 px-4 rounded-full">
                        Læs mere på trustpilot
                    </button>
                </a>
            </div> -->
        </div>
    </Layout>
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

@media (max-width: 768px) {
    .box {
        width: 95%;
    }

    .reviewbox {
        padding: 0 0 5px 0;
    }
}
</style>
