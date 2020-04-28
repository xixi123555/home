<template src="./template.html"></template>
<script>
import mylink from "./link"
export default {
  mixins: [{methods: mylink}],
  name: "my-link",
  props: {
    to: {
      type: Object,
      default: () => {return {}}
    }
  },
  data() {
    return {
      imgSrc1: ''
    }
  },
  computed: {
    imgSrc() {
      return  require('../../static/'+ this.to.icon + '.png')
    }
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>
<style lang="stylus" scoped src="./link.stylus"></style>