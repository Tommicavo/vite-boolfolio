<script>

export default {
    name: 'AppHeader',
    data() {
        return {}
    },
    components: {},
    props: {},
    computed: {},
    methods: {}
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <router-link class="navbar-brand" :to="{name: 'homePage'}">Boolfolio</router-link>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="navbar-brand" :to="{name: 'homePage'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="navbar-brand" :to="{name: 'contactPage'}">Contact us</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>
