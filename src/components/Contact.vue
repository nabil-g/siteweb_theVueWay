<template>
    <div id="six" class="rubDiv">

        <h2>Contact</h2>

        <p id="reponseMsg"></p>
        <form id="form" name="contactform" accept-charset="UTF-8" @submit="validateForm">
            <input :class="errors[0] ? 'errorField' : ''" type="text" id="name" name="name"
                   placeholder="Votre nom" v-model.lazy="name">
            <input :class="errors[1] ? 'errorField' : ''" type="email" id="mailaddress" name="mailaddress" placeholder="Votre adresse e-mail"
                   v-model.lazy="mailaddress">
            <textarea :class="errors[2] ? 'errorField' : ''" id="message" type="text" name="message" rows="6"
                      placeholder="Votre message (entre 2 et 1500 caractères)" v-model.lazy="message"></textarea>
            <p v-show="errors[3]">
                Les champs marqués en rouge sont incomplets ou incorrects.
            </p>
            <button id="sendbutton" type="submit" name="send">Envoyer</button>
        </form>

        <p class="credits">
            &copy; {{ currentYear }} Nabil Ghedjati.
        </p>

    </div>
</template>

<script>
    import {DateTime} from 'luxon';

    export default {
        name: 'Contact',
        data() {
            return {
                name: "",
                mailaddress: "",
                message: "",
                errors: [false, false, false, false],
                sending: false,
                sendingSuccess: false,
            }
        },
        computed: {
            currentYear() {
                return DateTime.local().year;
            }
        },
        methods: {
            validateForm(e) {
                e.preventDefault();
                this.errors = [false, false, false,false];
                if (this.name.length < 2 || this.name.length > 50) {
                    this.errors[0] = true;
                }
                let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
                if (!regex.test(this.mailaddress)) {
                    this.errors[1] = true;
                }
                if (this.message.length < 2 || this.message.length > 1500) {
                    this.errors[2] = true;
                }
                if (this.errors.includes(true)) {
                    this.errors[3] = true;
                    return false;
                }
                console.log("x");
                this.$http.post('/api', new FormData(e.target));

            }

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .errorField {
        background-color: rgba(255,8,8,0.25);
    }
</style>
