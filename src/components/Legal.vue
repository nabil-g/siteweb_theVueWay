<template>
    <div id="five" class="rubDiv">
        <h2>Mentions légales</h2>
        <p class="credits">
            Créateur et propriétaire : Nabil Ghedjati
            </br>Ce site est hébergé par <a href="https://shost.ca/" target="_blank">sHost.ca</a> au Canada.
            </br>
            </br>The PHP logo is Copyright &copy; 2001-{{ currentYear }} the PHP Group. All rights reserved.
            </br>The jQuery logo is Copyright &copy; {{ currentYear }} The jQuery Foundation.
            </br>Crédits photo : <a href="https://unsplash.com/photos/Y1ByvAGQ5iE" target="_blank">Unsplash.com</a>
            </br>Conçu avec <a href="https://vuejs.org">Vue.js</a>.
            </br>
            </br>&copy; {{ currentYear }} Nabil Ghedjati.
        </p>
    </div>
</template>

<script>
    import { DateTime } from 'luxon'
    export default {
        name: 'Skills',
        data() {
            return {}
        },
        computed: {
            currentYear() {
                return DateTime.local().year;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
