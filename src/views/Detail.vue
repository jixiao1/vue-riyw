<template>
  <div class="detail">
    <div class="xcianf">详情</div>
    <button @click="goback">返回</button>
    <div>当前的id为: {{id}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  methods: {
    goback () {
      this.$router.back()
    }
  },
  mounted () {
    // console.log(this.$route)
    this.id = this.$route.params.id
  }
}
</script>

<style>
.detail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
  background: olivedrab;
}
</style>
