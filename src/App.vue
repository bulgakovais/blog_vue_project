<template>
  <div class="app">
    <h2>Страница с постами</h2>
    <my-input v-model="searchValue" placeholder="Поиск..." />
    <div class="btns">
      <my-btn @click="showDialog">Создать новый пост</my-btn>
      <my-select
        @update="updateSelectValue"
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="show">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="searchAndSortedValue"
      @delete="deletePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div>
      <my-pagination
        v-model:pageNumber="pageNumber"
        v-model:totalPages="totalPages"
        @update:pageNumber="changePage"
      />
    </div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";

export default {
  components: { PostForm, PostList },
  data() {
    return {
      posts: [],
      show: false,
      isPostsLoading: false,
      pageNumber: 1,
      limit: 5,
      totalPages: 0,
      selectedSort: "",
      searchValue: "",
      searchAndSortedValue: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.show = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    showDialog() {
      this.show = true;
    },
    changePage(page) {
      this.pageNumber = page;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.pageNumber,
              _limit: this.limit,
            },
          }
        );
        // узнаем общее число страниц по количеству объектов в ответе
        this.totalPages = Math.ceil(
          responce.headers["x-total-count"] / this.limit
        );
        this.posts = responce.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },

  //   аналог useMemo() - кэширует значение, пока оно не изменится
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    searchAndSortedValue() {
      return this.sortedPosts.filter((p) =>
        p.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },

  //   аналог useEffect() - исполняется при изменении одноименного значения
  watch: {
    pageNumber() {
      this.fetchPosts();
    },
    // selectedSort(newVal) {
    //   console.log(newVal);
    // },
    // show(newVal) {
    //   console.log(newVal);
    // },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>