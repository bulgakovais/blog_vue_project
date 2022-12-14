<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-btn",
};
</script>


<style scoped>
.btn {
  align-self: flex-end;
  margin-top: 5px;
  padding: 8px 15px;
  background-color: transparent;
  border: 1px solid rgb(47, 34, 92);
}
</style>