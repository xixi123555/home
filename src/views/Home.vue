<template>
  <div class="home">
    <my-link v-for="(el,index) in childrenRoutes" :to="el" :key="index"></my-link>
    <button @click="sd">{{'sss'}}</button>
  </div>
</template>
<script>
// @ is an alias to /src
import myLink from "../components/link/index"
import {routes} from "../router"
export default {
  name: 'Home',
  components: {
    myLink
  },
  data(){
    return {
      routes1: [],//全局的route配置
      childrenRoutes: [],//子菜单信息
    }
  },
  methods: {
    sd() {
      this.$router.go(0)
    }
  },
  mounted() {
    
  },
  created() {
    this.routes1 = JSON.parse(JSON.stringify(routes)).splice(1,2)
    this.routes1.forEach(element => {
      let needIfo = JSON.parse(JSON.stringify({
        path: element.path,
        icon: element.meta.icon,
        title: element.meta.title
      }))
      this.childrenRoutes.push(needIfo)
    });
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
