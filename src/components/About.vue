<template>
    <div id="four" class="rubDiv">
        <h2>À propos</h2>
        </br>
        <table>
            <tr>
                <td class="date">Langues</td>
                <td>Français (langue maternelle)</br>
                    Anglais (correct)
                </td>
            </tr>
            <tr>
                <td class="date">Centres d'intérêts</td>
                <td>Cinéma, nouvelles technologies, sports de montagne,</br>
                    tennis, photographie, musique
                </td>
            </tr>
        </table>
        <p class="credits">&copy; {{ currentYear }} Nabil Ghedjati.  <router-link id="legallink" to="/legal"><strong>Mentions légales</strong></router-link>
        </p>
    </div>
</template>

<script>
    import { DateTime } from 'luxon';
    export default {
        name: 'Skills',
        data() {
            return {}
        },
        computed : {
            currentYear () {
                return DateTime.local().year;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
