<script>
import Layout from "../components/Layout.vue";
import makker from "../assets/makker.png";
import online from "../assets/online.png";
import pt from "../assets/pt.png";
import tp from "../assets/tp.png";

import Button from "../components/Button.vue";

export default {
    data() {
        return {
            items: [
                {
                    image: pt,
                    title: "GRATIS OG UFORPLIGTENDE SAMTALE",
                    subtitle: "Sparringssamtale | Afklaring | Gratis træningsprogram",
                    description:
                        "Sparring og forventningsafstemning om dine mål og vejen dertil. Sammen finder vi ud af hvordan mulighederne ligger og hvordan jeg kan hjælpe dig. Jeg lærer dig at kende og du lærer mig at kende. Det er altid en hyggelig samtale og du går aldrig tomhændet derfra.",
                    price: "0,-",
                },
                {
                    image: tp,
                    title: "PRIVAT FORLØB",
                    subtitle: "Superviseret træning | Online vejledning | personaliseret træningsprogram | Kostvejledning",
                    description:
                        "I samarbejde med mig, sikrer vi at du får maksimal value af din indsats og når dine mål. Vi tager skridtet videre i en blanding af fysiske sessioner, ugentlige online check-ins og en masse sparring undervejs.",
                    price: "1.600,-",
                },
                {
                    image: makker,
                    title: "MAKKER FORLØB",
                    subtitle: "Superviseret træning | Online vejledning | personaliserede træningsprogrammer | Kostvejledning",
                    description:
                        "Privat forløb, men med din træningsbuddy! Vi skruer op for det sociale og tilrettelægger træningen til jer begge, så I kan være sammen om det, men stadig træne hvert for sig når det ikke passer med et team-up.",
                    extra_description: "I sparer hver 40% pr. forløb her.",
                    price: "1.200,-/person",
                },
                {
                    image: pt,
                    title: "ENKELTSESSION",
                    subtitle: "Superviseret træning | personaliseret træningsprogram | Sparring om træningslære",
                    description:
                        "I en træning med mig får du lavet et personligt træningsprogram som er tilrettelagt dig, dine ønsker og dine mål. I træningen sparrer vi om hvordan man forholder sig til øvelser, teknikker og får råd med på vejen til efter din session.",
                    /* extra_description: "I sparer hver 25% på forløb her.", */
                    price: "750,-",
                },
                {
                    image: online,
                    title: "TRÆNINGSPROGRAM",
                    subtitle: "Træningsprogrammer er gratis. Kontakt mig for at få lavet et personaliseret ",
                    description:
                        "træningsprogram eller tilsendt et gratis udvalg af træningsprogrammer. Her følger træningsprogrammer med forskellige splits og skriftlig sparring om hvordan du bør bruge dem. Ønsker du at få dit program gennemgået fysisk, henviser jeg til en enkeltsession.",
                    price: "0,-",
                },
            ],
        };
    },
    components: {
        Button,
        Layout,
    },
};
</script>

<template>
    <Layout>
        <div>
            <div class="headerbox">
                <p class="text-3xl font-bold tracking-tight text-white lg:text-center lg:text-6xl">Forløb & Træningsprogrammer</p>
                <p class="text-xl mt-10 tracking-tight text-white lg:text-4xl">
                    Her har du et overblik over mine forløb. Hvis der er nogen tvil er du altid velkommen til at skrive til mig via mail, instagram
                    eller kontaktformularen.
                </p>
            </div>
            <div
                v-for="(item, index) in items"
                :key="index">
                <div class="programbox">
                    <img
                        :src="item.image"
                        alt="Row Image"
                        class="h-32 w-32 mx-auto mb-4 rounded-full" />
                    <p class="text-xl font-semibold mb-4">
                        {{ item.title }}
                    </p>
                    <p class="text-md font-semibold mb-4">
                        {{ item.subtitle }}
                    </p>
                    <p class="mt-2">
                        {{ item.description }}
                    </p>
                    <p class="mt-2">
                        {{ item.extra_description }}
                    </p>
                    <!-- <p class="mt-2">
            priser fra {{ item.price }}
          </p> -->
                    <div class="p-3">
                        <router-link to="/kontakt">
                            <button class="bg-white hover:text-[#32579a] text-black font-bold py-2 px-4 rounded-full">book nu</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
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

@media (max-width: 768px) {
    .box {
        width: 95%;
    }

    .reviewbox {
        padding: 0 0 5px 0;
    }
}
</style>
