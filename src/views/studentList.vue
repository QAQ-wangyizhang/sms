<template>
  <div class="student-list" id="student-list">
    <search-stulist></search-stulist>
    <tab-stulist></tab-stulist>
    <page-stulist @current-page="current" :nowPage="nowPage" :totalPage="totalPage"></page-stulist>
    <transition>
      <modal-stulist v-if="showModal"></modal-stulist>
    </transition>
  </div>
</template>

<script>
import searchStulist from "../components/stuList/searchStulist";
import tabStulist from "../components/stuList/tabStulist";
import pageStulist from "../components/stuList/pageStulist";
import modalStulist from "../components/stuList/modalStulist";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    searchStulist,
    tabStulist,
    pageStulist,
    modalStulist,
  },
  computed: {
    ...mapState(["showModal", "totalPage", "nowPage", "list", "searchValue"]),
  },
  methods: {
    current(i) {
      if (this.searchValue) {
        this.searchPage(i);
      } else {
        this.findByPage(i);
      }
    },
    ...mapActions(["findByPage", "searchPage"]),
  },
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  top: -100%;
  opacity: 0;
}
.v-enter-to,
.v-leave {
  top: 0;
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>