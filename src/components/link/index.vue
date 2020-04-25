<template>
  <component v-bind="handleProps()"></component>
</template>
<script>
export default {
  name: "link",
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleProps() {
      if (/^(https?:|mailto:|tel:)/.test(this.to)) {
        return {
          is: "a",
          href: this.to,
          target: "_blank",
          rel: "noopener"
        };
      }else{
          return {
              is: "router-link",
              to: this.to
          }
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>