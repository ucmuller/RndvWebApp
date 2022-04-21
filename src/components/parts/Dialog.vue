<template>
<h1>{{message}}</h1>
</template>

<script>
  export default {
    name: 'Dialog',
    props: [
      'message',
      'showDialog'
    ]
  }
</script>

<style scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>