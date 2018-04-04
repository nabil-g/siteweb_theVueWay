<template>
    <header>
        <ul class="navbar">
      <span class="leftLinks">
        <li><a title="Accueil" id="button0" href="#" @click="home">Nabil.Ghedjati</a></li>
        <li v-for="link in leftLinks"><router-link :title="link.title" :id="link.id" :to="link.href" exact>{{ link.text
            }}</router-link></li>
      </span>

            <span class="rightLinks">
        <li class="right" id="about"><router-link id="button4" to="/about">À propos</router-link></li>
        <li class="right" id="github"><a title="GitHub" class="fab fa-github" href="https://github.com/nabil-g"
                                         target="_blank"></a></li>
        <li class="right" id="linkedin"><a title="LinkedIn" class="fab fa-linkedin-in"
                                           href="https://www.linkedin.com/in/nabil-ghedjati-5051a2117"
                                           target="_blank"></a></li>
        <li class="right" id="insta"><a title="Instagram" class="fab fa-instagram"
                                        href="https://www.instagram.com/nabil.ghedjati/" target="_blank"></a></li>
        <li class="right" id="twitter"><a title="Twitter" class="fab fa-twitter" href="https://twitter.com/Nabil63"
                                          target="_blank"></a></li>
        <li class="right" id="mail"><router-link title="Contact" class="fas fa-envelope"
                                                 to="/contact"></router-link></li>
      </span>
        </ul>
    </header>
</template>

<script>


    export default {
        name: 'Navbar',
        data() {
            return {
                leftLinks: [
                    {
                        title: "Compétences",
                        id: "button1",
                        href: "/skills",
                        text: "Compétences"
                    },
                    {
                        title: "Expérience",
                        id: "button2",
                        href: "/experience",
                        text: "Expérience"
                    },
                    {
                        title: "Formation",
                        id: "button3",
                        href: "/school",
                        text: "Formation"
                    }
                ]
            }
        },
        methods: {
            home() {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    /*Barre de navigation (sous forme de liste), sans marges externes et internes, transparente*/

    .navbar {
        display: flex;
        list-style-type: none;
        overflow: hidden;
        justify-content: space-between;
    }

    #button0 {
        font-family: 'Satisfy', sans-serif;
        font-size: 1.1em;
        font-weight: bold;
        color: #B0FAFF;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        background-color: 0 !important;
    }

    #button0:hover {
        color: #D180C0;
    }

    /*Elements de navigation sous forme de liste*/

    /*Liens de la barre de navigation et liens du paragraphe*/

    .navbar span {
        display: flex;
    }

    .navbar span li a {
        display: block;
        padding: 12px 14px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .router-link-active{
        color: white;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        background: rgba(0, 0, 0, .5);
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }

    @media screen and (max-width:1024px) {
        .navbar {
            display: flex;
        }
        .navbar span li #button0 {
            transition: none;
        }
        .navbar span li a {
            transition: none;
            color: white;
        }
        .navbar li a:hover {
            color: none;
        }
    }

    @media screen and (max-width:771px) {
        .navbar {
            background-color: rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
        }

        .navbar .leftLinks {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .navbar .rightLinks{
            display: flex;
            justify-content: center;
        }

        .router-link-active{
            border-radius: 5px;
        }


    }

</style>
