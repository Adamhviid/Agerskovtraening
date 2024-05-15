<script>
import Layout from "../components/Layout.vue";
import makker from "../assets/programs/MAKKER FORLØB.png";
import online from "../assets/programs/ONLINE FORLØB.png";
import pt from "../assets/programs/GRATIS OG UFORPLIGTENDE SAMTALE.png";
import tp from "../assets/programs/FYSISK FORLØB.png";
import enkelt from "../assets/programs/ENKELT SESSION.png";
import program from "../assets/programs/TRÆNINGSPROGRAM.png";

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
                        "En dybdegående samtale om dine mål og vejen til at nå dem! Vi vil sammen udforske dine muligheder og hvordan jeg kan være med til at guide dig. Gennem denne proces lærer jeg dig at kende, og du lærer mig at kende. Det bliver altid en givende og hyggelig samtale, hvor du går derfra med værdifulde indsigter og klarhed om din træningsrejse.",
                    price: "0,-",
                },
                {
                    image: online,
                    title: "ONLINE FORLØB",
                    subtitle: "Online Personlig Træning | Coaching | Vejledning | Prof. Træningsprogram | Kostvejledning",
                    description:
                        "I samarbejde med mig sikrer vi, at hver eneste sekund af din træning tæller, og at du når dine mål på den mest effektive måde. Med online personlig træning går vi skridtet videre: Du optager dine øvelser og sender videoer til mig for feedback om teknik, intensitet og meget mere. Jeg forventer ugentlige online check-ins og er altid klar til at hjælpe dig, hvis der opstår tvivl eller spørgsmål undervejs. Lad os sammen tage din træning til nye højder!",
                },
                {
                    image: tp,
                    title: "FYSISK FORLØB",
                    subtitle: "Personlig Træning | Coaching | Vejledning | Prof. Træningsprogram | Kostvejledning",
                    description:
                        "I et fysisk forløb står jeg ved din side og guider dig igennem træningen, og deler værdifuld viden om, hvordan du bedst nærmer dig dine mål. Vi definerer en vejledning til, hvordan du optimalt udnytter din træningstid, selv mellem vores sessioner, når du træner på egen hånd. Du vil modtage et skræddersyet træningsprogram, nøje sammensat for at tilpasse dette til dine præferencer og sikre de bedste betingelser for de ønskede resultater. Lad os sammen skabe en plan for din succes!",
                },
                {
                    image: makker,
                    title: "MAKKER FORLØB",
                    subtitle: "Superviseret træning | Online vejledning | personaliserede træningsprogrammer | Kostvejledning",
                    description:
                        "Privat forløb, men med din træningsbuddy! Vi skruer op for det sociale og tilrettelægger træningen til jer begge, så I kan være sammen om det, men stadig træne hvert for sig når det ikke passer med et team-up.",
                },
                /* {
                    image: tp,
                    title: "PRIVAT FORLØB",
                    subtitle: "Superviseret træning | Online vejledning | personaliseret træningsprogram | Kostvejledning",
                    description:
                        "I samarbejde med mig, sikrer vi at du får maksimal value af din indsats og når dine mål. Vi tager skridtet videre i en blanding af fysiske sessioner, ugentlige online check-ins og en masse sparring undervejs.",
                }, */
                {
                    image: enkelt,
                    title: "ENKELTSESSION",
                    subtitle: "Personlig Træning | Coaching | Vejledning | Prof. Træningsprogram | Træningslære",
                    description:
                        "Når du træner med mig, får du ikke blot et træningsprogram - du får en personlig skræddersyet plan, skabt specifikt til dine ønsker og mål. Gennem vores sessioner sparrer vi om øvelser, teknikker og jeg giver dig værdifulde råd med på vejen til succes. Efter sessionen får du adgang til dit personlige program og mit omfattende drev, hvor du kan dykke ned i al den viden, der ligger til grund for min erfaring. Du vil altid have adgang til det træningsprogram, jeg har udarbejdet til dig, så du kan opbygge et solidt fundament for din fremtidige træningsplan.",
                },
                {
                    image: program,
                    title: "TRÆNINGSPROGRAM",
                    subtitle: "Træningsprogrammer er gratis",
                    description:
                        "Gør din træning personlig og effektiv! Kontakt mig nu for at få skræddersyet dit helt eget træningsprogram eller få tilsendt en række forskellige programmer. Du kan modtage træningsprogrammer med dit ønskede split, samt skriftlig vejledning om, hvordan du bedst udnytter dem. Hvis du ønsker en fysisk gennemgang af dit program, så kan jeg henvise dig til en Enkelt Session.",
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
                <div class="box">
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
                            <button class="bg-white hover:text-[#32579a] text-black font-bold py-2 px-4 rounded-full">Start nu</button>
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
