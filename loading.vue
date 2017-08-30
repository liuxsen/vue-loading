<template>
  <div v-show="show">
      <div>
        {{text}}
      </div>
  </div>
</template>
<script>
  export default {
    props:{
      show: Boolean,
      text:{
        type: String,
        default: '正在加载中...'
      }
    }
  }
</script>
<style>

</style>
