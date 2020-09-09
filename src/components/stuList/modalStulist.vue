<template>
  <div class="modal">
    <div class="mark" @click="setModal"></div>
    <div class="modal-content">
      <h2>编辑表单</h2>
      <div class="form" id="student-edit-form">
        <div>
          <label for="name1">姓名</label>
          <input
            type="text"
            name="name"
            id="name1"
            :value="stuInfo.stu.name"
            @input="edit('name',$event.target.value)"
            ref="name"
          />
        </div>
        <div>
          <label for>性别</label>
          <input
            type="radio"
            id="male-edit"
            name="sex"
            @change="edit('sex','0')"
            :checked="stuInfo.stu.sex == 0"
            value="0"
            ref="sex"
          />
          <label for="male-edit" class="sex">男</label>
          <input
            type="radio"
            id="female-edit"
            name="sex"
            @change="edit('sex','1')"
            :checked="stuInfo.stu.sex == 1"
            value="1"
          />
          <label for="female-edit" class="sex">女</label>
        </div>
        <div>
          <label for="number-edit">学号</label>
          <input readonly name="sNo" type="text" id="number-edit" :value="stuInfo.stu.sNo" />
        </div>
        <div>
          <label for="email-edit">邮箱</label>
          <input
            name="email"
            type="text"
            id="email-edit"
            :value="stuInfo.stu.email"
            @input="edit('email',$event.target.value)"
            ref="email"
          />
        </div>
        <div>
          <label for="birth-edit">出生年</label>
          <input
            type="text"
            name="birth"
            id="birth-edit"
            :value="stuInfo.stu.birth"
            @input="edit('birth',$event.target.value)"
            ref="birth"
          />
        </div>
        <div>
          <label for="phone-edit">手机号</label>
          <input
            type="text"
            name="phone"
            id="phone-edit"
            :value="stuInfo.stu.phone"
            @input="edit('phone',$event.target.value)"
            ref="phone"
          />
        </div>

        <div>
          <label for="address-edit">住址</label>
          <input
            type="text"
            name="address"
            id="address-edit"
            :value="stuInfo.stu.address"
            @input="edit('address',$event.target.value)"
            ref="address"
          />
        </div>
        <div>
          <button class="btn" @click="handleCommit">提交</button>&nbsp;
          <button class="btn" @click="handleReset">重置</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      stu: {},
    };
  },
  computed: {
    ...mapState(["stuInfo", "showModal"]),
  },
  methods: {
    setModal() {
      this.$store.commit({
        type: "isShowModal",
        show: false,
      });
    },
    edit(key, value) {
      this.stu[key] = value;
      // console.log(this.stu);
    },
    handleCommit() {
      const commitStu = Object.assign({}, this.stuInfo.stu, this.stu);
      this.$api.updateStu(commitStu).then((data) => {
        const { msg, status } = data;
        if (status === "success") {
          this.$toast(msg,'suc')
          this.$store.commit({
            type: "isShowModal",
            show: false,
          });
          Object.assign(this.stuInfo.stu,this.stu)
        } else {
          this.$toast(msg,'err')
        }
      });
      // console.log(commitStu);
    },
    handleReset(){
      for(const ref in this.$refs){
         this.$refs[ref].value = '';
      }
    }
  },
};
</script>

<style>
</style>