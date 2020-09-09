<template>
  <div class="student-add" id="student-add">
    <div class="form" id="student-add-form">
      <div>
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <div>
        <label for>性别</label>
        <input type="radio" id="male" name="sex" v-model="user.sex" value="0" />
        <label for="male" class="sex">男</label>
        <input type="radio" id="female" name="sex" value="1" v-model="user.sex" />
        <label for="female" class="sex">女</label>
      </div>
      <div>
        <label for="number">学号</label>
        <input type="text" id="number" name="sNo" v-model="user.sNo" />
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" v-model="user.email" />
      </div>
      <div>
        <label for="birth">出生年</label>
        <input type="text" id="birth" v-model="user.birth" />
      </div>
      <div>
        <label for="phone">手机号</label>
        <input type="text" id="phone" v-model="user.phone" />
      </div>

      <div>
        <label for="address">住址</label>
        <input type="text" id="address" v-model="user.address" />
      </div>
      <div>
        <label for></label>
        <input type="button" class="btn" @click="commit" value="提交" />&nbsp;
        <input type="button" class="btn" @click="reset" value="重置" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        sNo: 0,
        sex: "0",
        birth: 1998,
        address: "",
        phone: 10086,
        email: "",
      },
    };
  },
  methods: {
    commit() {
      this.$api.addStu(this.user).then((res) => {
        const { msg, status } = res;
        if (status === "success") {
          this.$toast(msg, "suc");
          const flag = window.confirm("是否继续添加?");
          if(!flag){
            this.$router.push('/studentList')
          }
        } else {
          this.$toast(msg, "err");
        }
      });
    },
    reset() {
      for (const prop in this.user) {
        this.user[prop] = "";
      }
    },
  },
};
</script>

<style>
</style>