<template>
  <div class="home">
    <my-link v-for="(el,index) in tos" :to="el" :key="index"></my-link>
  </div>
</template>
<script>
// @ is an alias to /src
import myLink from "../components/link/index"
export default {
  name: 'Home',
  components: {
    myLink
  },
  data(){
    return {
      tos:["/about","/1","/2"]
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  display flex
  justify-content center
  align-items center
  flex-direction row
  width 100%
  height 100%
</style>
