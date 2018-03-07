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
    body {
        background: no-repeat url("/static/clouds2.jpg") fixed;
        background-size: cover;
        font-family: 'Raleway', sans-serif;
        font-size: 1em;
    }
</style>
