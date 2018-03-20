<template>
    <div id="welcome" class="rubDiv">
        <h2 class="hw" id="hwDesktop"></h2>
        <span class=".hw">
            <vue-typer text="Hello world." :repeat="0"></vue-typer>
        </span>
        <p id="msg">Bienvenue ! Je suis un jeune <strong>développeur Web</strong> de {{ age }} ans,</br>
            plein d'idées et de motivation. Consultez mon parcours et n'hésitez pas à me contacter.
        </p>
        <p><a class="downloadlink" href="static/cv_nabil_ghedjati_2017.pdf" type="application/pdf" target="_blank">Télécharger le CV</a>
        </p>
    </div>
</template>

<script>

    import {DateTime} from 'luxon'
    import {VueTyper} from 'vue-typer'

    export default {
        name: 'Home',
        components: {
            VueTyper
        },
        data() {
            return {}
        },
        computed: {
            age() {
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
    #welcome {
        height: 66%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hw {
        font-family: 'Inconsolata', sans-serif;
    }

    .downloadlink {
        text-decoration: none;
        text-align: center;
        background-color: blue;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        -webkit-animation: animDl 5s infinite;
        animation: animDl 5s infinite;
        padding: 8px 25px;
        margin-top: 10px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .downloadlink:hover{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @-webkit-keyframes animDl {
        from {
            background: #61AFFC;
        }
        50% {
            background: #009999;
        }
        to {
            background: #61AFFC;
        }
    }

    @keyframes animDl {
        from {
            background: #61AFFC;
        }
        50% {
            background: #009999;
        }
        to {
            background: #61AFFC;
        }
    }

</style>
