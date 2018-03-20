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
        height: auto;
        transition: height ease 2s;
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
        height: 100%;
        width: 100%;
    }


</style>
