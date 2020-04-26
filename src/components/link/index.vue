<template src="./template.html"></template>
<script>
import mylink from "./link"
export default {
  mixins: [{methods: mylink}],
  name: "my-link",
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  methods: {
    
  },
  created() {
    console.log(mylink);
    
  }
};
</script>
<style lang="stylus" scoped src="./link.stylus"></style>