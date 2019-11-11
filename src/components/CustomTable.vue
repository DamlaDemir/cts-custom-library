<template>
     <section>
        <b-tabs>
            <b-tab-item label="Table">
                <b-table
                    :data="data"
                    :columns="columns"
                    focusable
                    :bordered=true
                    :narrowed=true>
                </b-table>
            </b-tab-item>
        </b-tabs>
    </section>
</template>
<script>
export default {
    props: {
        data: { type: Array, required: true },
        columns: { type: Array, required: true },
    }
}
</script>

