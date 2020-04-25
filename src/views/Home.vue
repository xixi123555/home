<template>
  <div class="home">
    <link1 to="/about"><span>sssss</span></link1>
  </div>
</template>

<script>
// @ is an alias to /src
import link1 from "../components/link/index"
export default {
  name: 'Home',
  components: {
    link1,
  }
}
</script>
<style lang="stylus" scoped>
.home
  display flex
  justify-content center
  flex-direction column
  width 80%
  height 100%
  background-color :red
</style>
