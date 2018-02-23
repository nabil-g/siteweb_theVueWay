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

</style>
