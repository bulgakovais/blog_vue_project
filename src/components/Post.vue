<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название</strong>: {{ post.title }}</div>
      <div><strong>Описание</strong>: {{ post.body }}</div>
    </div>
    <div class="post-btns">
      <my-btn @click="$emit('delete', post)">Удалить</my-btn>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      requaired: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid rgb(110, 89, 187);
  margin-top: 15px;
  background-color: rgb(237, 219, 253);
}
</style>