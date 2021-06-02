<template>
    <div>
        <h3 class="title">{{message}}</h3>
        <button @click="btnClick">按钮</button>
        <h3>{{name}}</h3>
        <cpn></cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'

    export default {
        name: "App",
        components:{
            Cpn
        },
        data () {
            return{
                message: "hello Webpack.",
                name: "ErgouSmith"
            }
        },
        methods:{
            btnClick(){}
        }
    }
</script>

<style scoped>
    .title {
        color: yellow;
    }
</style>