<template>
    <div id="three" class="rubDiv">
        <h2>Formation</h2>
        <br>
        <table>
            <tr v-for="h in history">
                <td class="date">{{ h.date }}</td>
                <td><strong>{{ h.schoolXp }}</strong></br>
                    <em>{{ h.place }}</em>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                history: [
                    {
                        date: "2017/2018",
                        schoolXp: "Bachelor Informatique 3eme année",
                        place: "EPSI Lyon"
                    },
                    {
                        date: "2016/2017",
                        schoolXp: "Simplon.co",
                        place: "Labélisée Grande école du numérique"
                    },
                    {
                        date: "2014/2015",
                        schoolXp: "Licence Pro Management des collectivités territoriales",
                        place: "Université d'Auvergne, Clermont-Fd"
                    },
                    {
                        date: "2012 / 2014",
                        schoolXp: "BTS Banque Option Marché des Particuliers",
                        place: "Lycée Ambroise Brugière, Clermont-Fd"
                    },
                    {
                        date: "2008 / 2010",
                        schoolXp: "Baccalauréat Sciences et Technologies de la Gestion",
                        place: "Lycée Montdory, THIERS"
                    },
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
