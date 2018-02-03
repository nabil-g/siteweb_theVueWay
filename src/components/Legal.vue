<template>
  <div id="five" class="rubDiv">
    <h2>Mentions légales</h2>
    <p class="credits">
      Créateur et propriétaire : Nabil Ghedjati
    </br>Ce site est hébergé par <a href="https://shost.ca/" target="_blank">sHost.ca</a>, Nouveau-Brunswick &amp; Québec, Canada.
      </br>Il fonctionne de manière optimale sur les navigateurs Chrome et Firefox.
      </br>
      </br>The PHP logo is Copyright &copy; 2001-<?php echo date('Y'); ?> the PHP Group. All rights reserved.
      </br>The jQuery logo is Copyright &copy; <?php echo date('Y'); ?> The jQuery Foundation.
      </br>Crédits photo : <a href="https://unsplash.com/photos/Y1ByvAGQ5iE" target="_blank">Unsplash.com</a>
      </br>
      </br>&copy; <?php echo date('Y'); ?> Nabil Ghedjati.
    </p>
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
