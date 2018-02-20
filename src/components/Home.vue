<template>
  <div id="welcome" class="rubDiv">
    <h2 class="hw" id="hwDesktop"></h2>
    <h2 class="hw" id="hwMobile">Hello world.<span class='cursor'>█</span></h2>
    <p id="msg">Bienvenue ! Je suis un jeune <strong>développeur Web</strong> de {{ age }} ans,</br> plein d'idées et de motivation. Consultez mon parcours et n'hésitez pas à me contacter.
    </p>
    <p><a class="downloadlink" href="assets/cv_nabil_ghedjati_2017.pdf" type="application/pdf" target="_blank">Télécharger le CV</a></p>
  </div>
</template>

<script>

import { DateTime } from 'luxon'
export default {
  name: 'Skills',
  data () {
    return {}
  },
  computed : {
    age () {
      let end = DateTime.local();
      let start = DateTime.fromISO("1992-01-27");
      let diff = end.diff(start);
      return Math.floor(diff.as('years'));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
