<template>
    <main>
        <navbar></navbar>
        <section class="rubrique">
            <router-view></router-view>
        </section>
    </main>
</template>

<script>
    import Navbar from '@/components/Navbar'

    export default {
        name: 'app',
        components : {
            Navbar
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar
    {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, 0.3);
    }


    ::-moz-selection {
        background-color: black;
        color: yellow;
    }

    ::selection {
        background-color: black;
        color: yellow;
    }

    :focus {outline:none;}
    ::-moz-focus-inner {border:0;}


    a {
        text-decoration: none;
        color: white;
    }


    #entrance {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 1);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-transition: ease;
        transition: ease;
    }


    #grandTitre {
        display: none;
        font-family: 'Satisfy', sans-serif;
        font-size: 5em;
    }

    #grandTitre a, #petitTitre a {
        color: #D180C0;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-animation: animtitre 5s infinite;
        animation: animtitre 5s infinite;
    }


    @-webkit-keyframes animtitre {
        from {
            color: #61AFFC;
        }
        50% {
            color: #009999;
        }
        to {
            color: #61AFFC;
        }
    }


    @keyframes animtitre {
        from {
            color: #61AFFC;
        }
        50% {
            color: #009999;
        }
        to {
            color: #61AFFC;
        }
    }


    body {
        background: no-repeat url("/static/clouds2.jpg") fixed;
        background-size: cover;
        font-family: 'Raleway', sans-serif;
        font-size: 1em;
    }
    /*Marges intérieures des cellules du tableau invisible */

    td {
        padding: 15px;
        text-align: left;
    }

    td em {
        font-size: 0.95em;
    }

    .rubrique {
        position: relative;
        padding: 50px;
        /*height: 481px;*/
        height: auto;
        /*max-height:800px;*/
        transition: max-height ease 2s;
        width: 960px;
        border-radius: 10px;
        margin: auto;
        margin-top: 17vh;
        margin-bottom: 3vh;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .rubrique:before {
        content: '';
        background: url("/static/clouds2.jpg") no-repeat fixed;
        background-size: cover;
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -ms-filter: blur(5px);
        -o-filter: blur(5px);
        filter: blur(5px);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }

    .rubrique .rubDiv {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    @media screen and (min-width:1025px) {

        .pace {
            -webkit-pointer-events: none;
            pointer-events: none;

            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        .pace-inactive {
            display: none;
        }

        .pace .pace-progress {
            background: #29d;
            position: fixed;
            z-index: 2000;
            top: 0;
            right: 100%;
            width: 100%;
            height: 2px;
        }
    }

    @media screen and (max-width:1024px) {

        #entrance {
            display: none;
        }

        body {
            background: url('/static/clouds2_blur_mid.jpg');
            background-attachment: scroll;
            color: white !important;
        }


        .rubrique {
            background: 0;
            box-shadow: none;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .rubrique::before{
            background: 0;
        }


    }

</style>
