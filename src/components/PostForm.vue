<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title" placeholder="Название" />
    <my-input v-model="post.body" placeholder="Описание" />
    <my-btn @click="createPost">Создать</my-btn>
  </form>
</template>

<script>
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
// v-model='post.body' - двустороннее связывание, равняется
//  v-bind:value="post.body"
//  @input="post.body = $event.target.value"
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>


