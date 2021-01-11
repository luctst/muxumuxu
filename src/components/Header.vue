<template>
    <header>
        <p>{{ mn }}mn-{{ seconds }}s</p>
    </header>
</template>

<script>
export default {
    data() {
        return {
            mn: 2,
            seconds: 10
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
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: flex-end;
}

header p {
    margin: 0;
}
</style>