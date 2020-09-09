<template>
  <div class="search">
    <label for="search-input">关键字搜索:</label> &nbsp;
    <input type="text" id="search-input" v-model="inp" @input="reset" />
    <button @click="search">搜索</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data(){
    return {
      inp : ''
    }
  },
  computed : {
    ...mapState(["searchValue"])
  },
  methods: {
    reset(){
      if(!this.inp){
        this.findByPage(1);
        this.setSearchVal('');
      }
    },
    search(){
      if(this.inp){
        this.setSearchVal(this.inp);
        this.searchPage(1);
      }else{
        this.findByPage(1);
      }
    },
    ...mapMutations(["setSearchVal"]),
    ...mapActions(["searchPage","findByPage"])
  }
};
</script>

<style>
</style>