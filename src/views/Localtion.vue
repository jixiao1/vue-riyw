<template>
  <div class="location">
    <div class="PSOLA">定位</div>
    <button @click="goback">返回</button>
  </div>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>

<style>
.location {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: teal;
  color: white;
  z-index: 9999;
}
</style>
