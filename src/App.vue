<template>
  <div id="app">
    <transition name="slider">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <nav class="bagger">
      <router-link to="/home">首页</router-link>
      <router-link to="/cate">分类</router-link>
      <router-link to="/mine">我的</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
   margin: 0;
   padding: 0;
   position: relative;
}
.bagger {
   width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 50px;
  display: flex;
  background: #eeeeee;
  border-top: 1px solid white;
}
.bagger a {
  flex: 1;
  border-right: 1px solid white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: #333333;
}
@keyframes identifier {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.slider-enter-active {
  animation: identifier 2s;
}
</style>
