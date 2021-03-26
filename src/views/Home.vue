<template>
  <div class="home">
    <div class="header">
      <div class="title">首页</div>
      <div class="poisiton" @click="positionClickHandler">定位</div>
    </div>
    <div class="content">
      <ul class="list">
        <li v-for="(item,index) in list" :key="index" class="item"
        @click="goDetail(index)">
          item {{index}}
        </li>
      </ul>
    </div>
    <transition name="slicxk">
          <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: new Array(100).fill(null)
    }
  },
  methods: {
    positionClickHandler () {
      this.$router.push('/home/localtion')
    },
    goDetail (index) {
      // this.$router.push(`/home/detail/${index}`)
      this.$router.push({
        name: 'detail',
        params: { id: index }
      })
    }
  }
}
</script>

<style>
.home {
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;

}
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: tan;
  position: fixed;
  left: 0%;
  top: 0%;
  border-bottom: 1px solid white;
}
.title {
  position: absolute;
  left: 50%;
  height: 50px;
  line-height: 50px;
}
.poisiton {
  position: absolute;
  right: 20px;
}
.content {
  padding: 50px 0;
  background: tan;
}
.list {
  width: 100%;
  list-style: none;
}
.list .item {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid white;
}
@keyframes donghua {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.slicxk-enter-active {
  animation: donghua 2s;
}
@keyframes donghua1 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

.slicxk-leave-active {
  animation: donghua1 2s;
}
</style>
