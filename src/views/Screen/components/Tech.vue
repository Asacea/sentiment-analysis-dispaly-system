<template>
    <div class="container">

    </div>
</template>
<script setup>
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import {ref} from 'vue'
const route = useRoute()
const screenId=ref(0)
onBeforeRouteUpdate(()=>{
    screenId.value=route.params.id
    console.log(screenId.value)
})
</script>
<style scoped lang="scss">
</style>
