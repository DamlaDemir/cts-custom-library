<template>
    <div :class="[
    'vue-custom-clock--div',
    'vue-custom-clock--div--' + color,
    ]">{{ display }}</div>
</template>
<script>
    import moment from 'moment';
    export default {
        props: {
            color: {
                type:String,
                default:'blue'
            }
        },
        data() {
            return {
                time: Date.now()
            }
        },
        computed: {
            display() {
                return moment(this.time).format("HH:mm:ss");
            }
        },
        created() {
            setInterval(() => {
                this.time = Date.now();
            }, 1000);
        }
    }
</script>

<style>
.vue-custom-clock--div {
  width: 20%;
  margin-left: 40%
}
.vue-custom-clock--div--blue {
  background-color: #0194ef;
}
.vue-custom-clock--div--red {
  background-color: red;
  color:white
}
.vue-custom-clock--div--yellow {
  background-color: yellow;
}

</style>