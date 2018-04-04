<template>
    <div id="welcome" class="rubDiv">
        <h2 class="hw" id="hwDesktop">
            Hello world.<span class="blinkingCaret">█</span>
        </h2>
        <br>
        <p id="msg">Bienvenue ! Je suis un jeune <strong>développeur Web</strong> de {{ age }} ans,</br>
            plein d'idées et de motivation. Consultez mon parcours et n'hésitez pas à me contacter.
        </p>
        <br>
        <div><a class="downloadlink" href="static/cv_nabil_ghedjati_2017.pdf" type="application/pdf" target="_blank">Télécharger le CV</a>
        </div>
    </div>
</template>

<script>

    import {DateTime} from 'luxon'

    export default {
        name: 'Home',
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

<style scoped>

    .hw {
        font-family: 'Inconsolata', sans-serif;
    }

    .blinkingCaret{
        animation: blink 1s step-start 0.5s infinite;
    }

    @keyframes blink {
        50%{
            opacity: 0;
        }
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

    @media screen and (max-width: 1024px) {
        #downloadlink {
            animation: none;
        }
    }
</style>
