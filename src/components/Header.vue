<template>
    <header class="container mt-3">
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <h1 class="h2">Muxu game</h1>
                <p v-if="displayChrono" :class="handleClass" class="text-light rounded h4">{{ mn }}mn-{{ seconds }}s</p>
                <p v-if="mn === 0 && seconds === 0" class="text-muted">Timeout c'est dead wallah</p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-vue',
    data() {
        return {
            mn: 3,
            seconds: 10
        }
    },
    props: {
        gameStarted: {
            type: Boolean,
            required: true
        }
    },
    created() {
        const i = setInterval(function () {
            if (this.mn > 0) {
                if (this.seconds === 0) {
                    this.mn = this.mn - 1;
                    this.seconds = 10;
                }

                return this.seconds = this.seconds - 1;
            }
            
            if (this.mn === 0) {
                if (this.seconds > 0) {
                    return this.seconds = this.seconds - 1;
                }
                clearInterval(i);
            }

        }.bind(this), 1000);
    },
    computed: {
        handleClass() {
            if (this.mn >= 2) {
                return 'bg-success';
            }

            if (this.mn >= 1) {
                return 'bg-warning';
            }

            return 'bg-danger';
        },
        displayChrono()  {
            if (!this.gameStarted) return false;

            if (this.mn === 0 && this.seconds === 0) return false;
            return true;
        }
    },
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
}

header p {
    margin: 0;
    padding: 1%;
}

.row {
    width: inherit;
}

.col-12 {
    width: inherit;
}
</style>