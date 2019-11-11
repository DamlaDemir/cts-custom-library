<template>
    <section>
        <div class="buttons">
            <b-button :type="type"><slot></slot></b-button>
        </div>
    </section>
</template>

<script>
export default {
    props : {
        type : {type: String , default:"is-info"}
    }
}
</script>

<style scoped>
.buttons {
    padding-left: 50%;
}
</style>