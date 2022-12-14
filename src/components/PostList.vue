<template>
  <div>
    <div v-if="posts.length > 0">
      <transition-group name="list" tag="p">
        <post
          v-for="post in posts"
          :key="post"
          :post="post"
          @delete="$emit('delete', post)"
        />
      </transition-group>
    </div>
    <h3 v-else>Список постов пуст</h3>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  components: { Post },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(70px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>