<template src="./home.html"></template>
<script>
// @ is an alias to /src
import myLink from "../../components/link/index"
import home from "./home"
export default {
  mixins: [{methods: home}],
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
  },
  mounted() {
    console.log(this.$el);
    
  },
  created() {
    this.handleRendRoutes()
    console.log('xxxxxx',this.childrenRoutes);
    
    
  }
}
</script>
<style lang="stylus" scoped src="./home.stylus"></style>
