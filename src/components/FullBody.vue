<template>
    <div class="container">
        <input v-model="search" :placeholder="text"/>
    </div>
</template>
<script>
export default {
    name: "FullBody",
    data() {
        return {
            text: "Search for a country...",
            search: ""
        }
    },
    methods: {

    }
}
</script>