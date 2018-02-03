<template>
  <div id="four" class="rubDiv">
    <h2>À propos</h2>
      </br>
      <table>
        <tr>
          <td class="date">Langues</td>
          <td>Français (langue maternelle)</br>
            Anglais (courant)
          </td>
        </tr>
        <tr>
          <td class="date">Centres d'intérêts</td>
          <td>Cinéma, nouvelles technologies, sports de montagne,</br>
           tennis, photographie, musique
         </td>
        </tr>
      </table>
      <p class="credits">&copy; <?php echo date('Y'); ?> Nabil Ghedjati.  <a id="legallink" href="#"><strong>Mentions légales</strong></a></p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
