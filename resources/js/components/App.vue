<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <ul class="navbar-nav">
                    <router-link :to="{ name: 'welcome' }" class="nav-link">Home</router-link>
                    <router-link :to="{ name: 'first-page' }" class="nav-link" >Page1</router-link>
                    <router-link :to="{ name: 'second-page' }" class="nav-link" >Page2</router-link>
                    <router-link :to="{ name: 'third-page' }" class="nav-link" >Page3</router-link>
                </ul>
            </div>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>