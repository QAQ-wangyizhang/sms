<template>
  <div class="header">
    <div class="logo">
        <img :src="imgUrl" alt="">
      <span>渡一教育</span>
    </div>
  </div>
</template>

<script>
import imgUrl from "../assets/logo.png"
export default {
    data(){
        return {
            imgUrl,
        }
    }
};
</script>

<style>

</style>