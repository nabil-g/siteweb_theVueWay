<template>
  <div id="six" class="rubDiv">

    <h2>Contact</h2>

      <p id="reponseMsg"></p>
      <form id="form" name="contactform" accept-charset="UTF-8" onsubmit="return verifForm(this)" method="POST">
        <input type="text" id="name" name="name" placeholder="Votre nom" value="">
        <input type="email" id="mailaddress" name="mailaddress" placeholder="Votre adresse e-mail" value=""  >
        <textarea id="message" type="text" name="message" rows="6" placeholder="Votre message (entre 2 et 1500 caractères)" value=""></textarea>
        <p id="erreurForm">
          Les champs marqués en rouge sont incomplets ou incorrects.
        </p>
        <p id="okForm"></p>
        <button id="sendbutton" type="submit" name="send">Envoyer</button>
      </form>

    <p class="credits">
      &copy; <?php echo date('Y'); ?> Nabil Ghedjati.
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
