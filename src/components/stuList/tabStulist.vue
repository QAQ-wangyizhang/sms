<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="tBody">
      <template v-if="list">
        <tr v-for="(stu,index) in list" :key="stu.id">
          <td>{{stu.sNo}}</td>
          <td>{{stu.name}}</td>
          <td>{{stu.sex === 0 ? "男" : "女"}}</td>
          <td>{{stu.email}}</td>
          <td>{{new Date().getFullYear() - stu.birth}}</td>
          <td>{{stu.phone}}</td>
          <td>{{stu.address}}</td>
          <td>
            <button class="edit btn" @click="handleEdit(stu)">编辑</button>&nbsp;
            <button class="del btn" @click="handleDelete(stu.sNo,index)">删除</button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    handleEdit(stu) {
      this.$store.commit({
        type: "isShowModal",
        show: true,
      });
      this.$store.commit({
        type: "changeStuInfo",
        info: { stu },
      });
      // console.log(stu);
    },
    handleDelete(sNo,index) {
      this.$api.delStu(sNo).then((res) => {
        const {msg,status} = res;
        if(status === "success"){
          this.$toast(msg,'suc')
          this.$delete(this.list,index)
          console.log(this.list,index)
        }else{
          this.$toast(msg,'err')
        }
      });
    },
    ...mapActions(["findByPage"]),
  },
  created() {
    this.findByPage(this.nowPage);
  },
  computed: {
    ...mapState(["list","nowPage"]),
  },
};
</script>

<style>
</style>