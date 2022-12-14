
<template>
  <div class="pagination-container">
    <div
      class="pagination-item"
      v-for="page in totalPages"
      :value="page"
      :key="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      @click="changePage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    pageNumber: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    changePage(page) {
      console.log(page);
      this.$emit("update:pageNumber", page);
    },
  },
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-top: 40px;
  gap: 20px;
}
.pagination-item {
  width: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
.current-page {
  border: 2px solid rgb(48, 121, 48);
  color: rgb(48, 121, 48);
}
</style>