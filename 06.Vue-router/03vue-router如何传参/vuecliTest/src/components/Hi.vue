<template>
    <div class="class">
        <h1>{{ msg }}</h1>
        <router-view></router-view>

    </div>
</template>

<script type="text/ecmascript-6">
    export  default {
        name: 'hi',
        data(){
            return {
                msg: 'hi, i am Hi 页面'
            }
        }
    }
</script>

<style scoped>

</style>
