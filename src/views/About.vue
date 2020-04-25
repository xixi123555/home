<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="events">xixi</button>
  </div>
</template>
<script>
export default {
  name: 'about',
  methods: {
    events() {
      this.$router.push('/home')
    },
  }
}
</script>
