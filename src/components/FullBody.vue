<template>
    <div class="container">
        <form @submit.prevent="filterCountry">
            <div class="input-group mb-3">
                <button class="btn btn-outline" type="button" id="button-addon1">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" class="form-control" :placeholder="text" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" />
            </div>
        </form>
    </div>

</template>
<script>
export default {
    name: "FullBody",
    data() {
        return {
            text: "Search for a country...",
            search: "",
        };
    },
    methods: {
        filterCountry() {

        }
    },
};
</script>
