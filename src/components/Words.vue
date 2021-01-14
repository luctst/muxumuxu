<template>
    <section class="row">
        <div class="col-12">
            <div v-if="!gameStarted" class="d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-outline-primary btn-lg">Rules</button>
                <button type="button" class="btn btn-outline-success btn-lg" @click="showModal = true">Start</button>
            </div>
            <modal name="m" @closed="showModal = false">
                <header>
                    <h1 class="h4">Entrez le domaine que vous voulez</h1>
                </header>
                <form></form>
            </modal>
        </div>
    </section>
</template>

<script>
import http from '../utils/api';

export default {
    name: 'words',
    props: {
        gameStarted: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            words: [],
            showModal: false
        }
    },
    methods: {
        registerTopic() {
            this.$emit('gameStatus', !this.gameStarted);
        }
    },
    watch: {
        async gameStarted() {
            if (this.gameStarted) {
                try {
                    const { data } = await http.get('');
                    this.words = [ ...data ];
                } catch (error) {
                    error
                }
            }
        },
        showModal() {
            if (this.showModal) return this.$modal.show('m');
            this.$modal.hide('m');
        }
    }
}
</script>

<style scoped>
section {
    height: inherit;
}

section div {
    height: inherit;
}
</style>