<template>
  <div id="app">
    <sys-header></sys-header>
    <left-menu></left-menu>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url(./index.css);
</style>

<script>
import sysHeader from "./components/sysHeader";
import leftMenu from "./components/leftMenu";
export default {
  components: {
    sysHeader,
    leftMenu,
  },
};
</script>
