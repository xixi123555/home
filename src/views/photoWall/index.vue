<template src="./photoWall.html"></template>
<script>
import photoWall from "./photoWall"
export default {
    mixins: [{methods: photoWall}],
    name: "photo-wall",
    data() {
        return {
            count: 1,
        }
    },
    computed: {
        imgSrc() {
            return require(`../../assets/imgs/${this.count}.jpg`)
        }
    }
}
</script>
<style lang="stylus" scoped src="./photoWall.stylus"></style>