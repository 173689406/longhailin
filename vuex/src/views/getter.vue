<template>
    <div>
        <h1>
            {{$store.getters.reverseMsg}}
        </h1>
        <h2>
            {{mixinMsg1}}
        </h2>
    </div>
</template>
<script>
export default {
    computed:{
        mixinMsg1:function(){
            return this.$store.getters.mixinMsg(2323)
        }
    }
}
</script>