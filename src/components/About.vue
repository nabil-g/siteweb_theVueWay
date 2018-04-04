<template>
    <div id="four" class="rubDiv">
        <h2>À propos</h2>
        <br>
        <p>Juste pour infos, le français est ma langue maternelle, et j'ai un bon niveau d'anglais.</p>
        <p>Je suis passionné par le cinéma, les nouvelles technologies et la bonne musique.</p>
        <br>
        <p class="credits">&copy; {{ currentYear }} Nabil Ghedjati.  <router-link id="legallink" to="/legal"><strong>Mentions légales</strong></router-link>
        </p>
    </div>
</template>

<script>
    import { DateTime } from 'luxon';
    export default {
        name: 'About',
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
