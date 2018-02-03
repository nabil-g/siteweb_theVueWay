<template>
  <header>
    <ul class="navbar">
      <span class="leftLinks">
        <li v-for="link in leftLinks"><router-link :title="link.title" :id="link.id" :to="link.href">{{ link.text }}</router-link></li>
      </span>

      <span class="rightLinks">
        <li class="right" id="about"><router-link id="button4" href="#">À propos</router-link></li>
        <li class="right" id="github"><router-link title="GitHub" class="fa fa-github" href="https://github.com/nabil-g" target="_blank"></router-link></li>
        <li class="right" id="linkedin"><router-link title="LinkedIn" class="fa fa-linkedin" href="https://www.linkedin.com/in/nabil-ghedjati-5051a2117" target="_blank"></router-link></li>
        <li class="right" id="insta"><router-link title="Instagram" class="fa fa-instagram" href="https://www.instagram.com/nabil.ghedjati/" target="_blank"></router-link></li>
        <li class="right" id="twitter"><router-link title="Twitter" class="fa fa-twitter"  href="https://twitter.com/Nabil63" target="_blank"></router-link></li>
        <li class="right" id="mail"><router-link title="Contact" class="fa fa-envelope" href="#"></router-link></li>
      </span>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      leftLinks: [
        {
          title: "Accueil",
          id: "button0",
          href:"/",
          text: "Nabil.Ghedjati"
        },
        {
          title: "Compétences",
          id: "button1",
          href:"/skills",
          text:"Compétences"
        },
        {
          title: "Expérience",
          id: "button2",
          href:"/experience",
          text:"Expérience"
        },
        {
          title: "Formation",
          id: "button3",
          href:"/school",
          text:"Formation"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
