<template>
  <div class="wrapper">
    <Header />
    <h2>Current page is {{ $route.meta.title }}</h2>
    <transition name="slide-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style>
body {
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
}

.wrapper {
  padding: 35px;
  margin: 35px;
  font-family: Arial, sans-serif;
  background-color: #fff;
  border: 1px solid lightgray;
  min-height: calc(100vh - 70px);
  box-sizing: border-box;

}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
