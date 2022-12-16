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
  border: 4px solid rgb(0 150 67);
  margin-top: 15px;
  background-color: rgb(158 158 158 / 18%);
}
</style>