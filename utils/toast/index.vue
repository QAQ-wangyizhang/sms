<template>
  <div class="toast-wrapper" :class="[type,animate]" v-if="flag">
    <div class="toast-content">{{msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   msg: "修改成功",
    //   type: "suc",
      flag: true,
      show: true,
    };
  },
  computed: {
    animate() {
      return this.show ? "fade-in" : "fade-out";
    },
  },
};
</script>

<style scoped>
.toast-wrapper {
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: fixed;
  /* position: relative; */
  top: 0;
  margin-top: 30px;
  border-radius: 10px;
  left: calc(50% - 100px);
}

.suc {
  background-color: #67c23a;
}

.err {
  background-color: #f56c6c;
}

.toast-content {
  color: #fff;
  font-weight: 600;
}

@keyframes fadeIn {
  0% {
    top: -100px;
    opacity: 0;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
}

@keyframes fadeOut {
  100% {
    top: -100px;
    opacity: 0;
  }

  0% {
    top: 0px;
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s;
}

.fade-out {
  animation: fadeOut 0.5s;
}
</style>