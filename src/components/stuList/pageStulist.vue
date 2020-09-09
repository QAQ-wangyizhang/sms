<template>
  <div class="turn-page">
    <button id="prev-btn" class="btn" @click="turnPage('prev')">上一页</button>
    <template>
      <ul>
        <template v-if="totalPage < 8">
          <li
            class="btn"
            v-for="page in totalPage"
            :key="page"
            :class="{active:nowPage === page}"
            @click="turnPage(page)"
          >{{page}}</li>
        </template>
        <template v-else>
          <!-- 当前页数小于4 -->
          <template v-if="nowPage <= 4">
            <li
              class="btn"
              v-for="i in 6"
              :key="i"
              :class="{active:i === nowPage}"
              @click="turnPage(i)"
            >{{i}}</li>
          </template>
          <!-- 当前页数大于4 -->
          <template v-if="nowPage > 4">
            <li class="btn" @click="turnPage(1)">1</li>
            <li class="btn" @click="turnPage(nowPage - 5)">...</li>
          </template>
          <!-- 在4到96之间时 -->
          <template v-if="nowPage > 4 && nowPage < totalPage - 4">
            <li class="btn"
            v-for="i in 5"
            :key="nowPage - 3 + i"
            @click="turnPage(nowPage - 3 + i)"
            :class="{active: i === 3}"
             >{{nowPage - 3 + i}}</li>
             <!-- n-1 n-2 n n+1 n+2 -->
          </template>
          <!-- 在小于96页时 -->
          <template v-if="nowPage < totalPage - 4">
            <li class="btn" @click="turnPage(nowPage + 5)">...</li>
            <li class="btn" @click="turnPage(totalPage)">{{totalPage}}</li>
          </template>
          <!-- 当前页数大于96页 -->
          <template v-if="nowPage >= totalPage - 4">
            <li
              class="btn"
              v-for="i in 6"
              :key="totalPage - 6 + i"
              :class="{active:totalPage - 6 + i === nowPage}"
              @click="turnPage(totalPage - 6 + i)"
            >{{totalPage - 6 + i}}</li>
          </template>
        </template>
      </ul>
    </template>
    <button id="next-btn" class="btn" @click="turnPage('next')">下一页</button>
  </div>
</template>

<script>
export default {
  props: {
    nowPage : {
      type : Number,
      default : 1
    },
    totalPage : {
      type : Number,
      default:100
    }
  },
  data() {
    return {
      np : null
    };
  },
  // n <= 4    1,2,3,4,5,6
  // n > 4     1....
  // n <= t-4  n-2,n-1,n+1,n+2
  // n > t-4   t-5 t-3 t-2 t-1 t
  methods: {
    turnPage(page) {
      if (typeof page === "string") {
        if (page === "prev") {
         this.np = this.nowPage <= 1 ? 1 : this.nowPage - 1;
        } else if (page === "next") {
        this.np =  this.nowPage >= this.totalPage ? this.totalPage : this.nowPage + 1;
        }
      } else if (typeof page === "number") {
        this.np = page;
      }
      this.$emit("current-page",this.np)
      // console.log(this.np)
    },
  },
};
</script>

<style scoped>
.active {
  background-color: aquamarine;
  color: #fff;
  font-weight: bold;
}
</style>