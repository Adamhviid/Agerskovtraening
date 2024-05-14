<script setup>
import Layout from "../components/Layout.vue";
import Button from "../components/Button.vue";
import Programs from "./Programs.vue";
import Reviews from "../components/Reviews.vue";
import Colabs from "./colabs.vue";
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
                    <p class="text-md leading-8">Online Coaching i hele Danmark</p>
                    <h4 class="text-base font-bold mt-5">Overblik over din rejse - Det handler om dig.</h4>
                    <Button
                        to="/kontakt"
                        text="Start din rejse her" />
                </div>
            </div>
            <div class="box">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <p class="text-md leading-8">Personlig Træning i Hillerød og København</p>
                    <h4 class="text-base font-bold mt-5">En professionel vurdering og anbefaling - Dit valg og din indsats.</h4>
                    <Button
                        to="/kontakt"
                        text="Start din rejse her" />
                </div>
                <div class="image-container">
                    <img
                        src="../assets/photos/SHEETS på computer.png"
                        alt="philip"
                        class="" />
                </div>
            </div>

            <div class="box">
                <h1 class="text-md mt-8 font-bold tracking-tight lg:text-2xl">Få maksimalt ud af din indsats!</h1>
                <div class="text relative">
                    Tag kontrol over din krop med personlig træning / online coaching! Tiden er kostbar, og vi er her for at sikre, at hvert eneste
                    øjeblik, du investerer i dit fitnesscenter, giver maksimalt udbytte.
                </div>
                <div class="relative mt-3">
                    Drømmer du om en stærkere, mere muskuløs krop? Lad os sammen gøre drøm til virkelighed, og du vil opdage, at dine grænser er langt
                    mere flydende, end du nogensinde har forestillet dig!
                </div>
                <Reviews />
            </div>

            <div class="box">
                <h1 class="mt-8 font-bold tracking-tight">MED PHILIP SOM TRÆNER</h1>
                <div class="mt-3 relative mt-1">
                    Jeg specialiserer mig i at tilpasse løsninger til dine unikke behov og finde den perfekte balance mellem hvad der passer dig og
                    hvad der er optimalt. Som din træner føler jeg mig forpligtet til at være i frontlinjen af den nyeste evidens. Jeg er altid
                    fordybet i at undersøge og samle erfaringer fra de aller bedste, så du får den mest effektive træning muligt!
                </div>
                <div class="mt-3 relative mt-1">
                    Som din træner føler jeg mig forpligtet til at være i frontlinjen af den nyeste evidens. Jeg er altid fordybet i at undersøge og
                    samle erfaringer fra de aller bedste, så du får den mest effektive træning muligt!
                </div>
                <div class="image-container">
                    <img
                        src="../assets/photos/books.jpg"
                        alt="books"
                        class="" />
                </div>

                <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="mt-16">
                        <div class="relative">
                            Jeg er Philip Agerskov - en kommende fysioterapeut, tidligere elitesvømmer, soldat og bare en almindelig hverdagsperson.
                        </div>
                        <div class="relative">
                            I oktober 2022 oprettede jeg cvr-nummer på Agerskov Træning og siden da har vi virkelig skudt fart med vores eget klientel
                            og spændende samarbejder med andre virksomheder. Vi har rejst en betydelig distance siden dengang, og den oplevelse, jeg
                            tilbyder dig, afspejler vores rejse og ekspertise til fulde.
                        </div>
                    </div>
                    <div>
                        <img
                            src="../assets/photos/phillip1.jpeg"
                            alt="Your Image"
                            class="w-full max-w-78 h-auto pt-20" />
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
            <section id="programs">
                <Programs />
            </section>
            <section id="colabs">
                <Colabs />
            </section>
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
