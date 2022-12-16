<template>
  <div>
    <div class="navbar">
      <h2>BLOG</h2>
      <div class="navbar_btns">
        <my-btn class="navbar-btn" @click="$router.push('/')">Главная</my-btn>
        <my-btn class="navbar-btn" @click="$router.push('/posts')"
          >Посты</my-btn
        >
      </div>
    </div>
  </div>
</template>


<script>
import MyBtn from "./UI/MyBtn.vue";
export default {
  components: { MyBtn },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: rgb(85 119 86);
  box-shadow: 2px 2px 4px gray;
  align-items: center;
  padding: 15px;
  margin-bottom: 50px;
}
.navbar_btns {
  display: flex;
}
.navbar-btn {
  margin-left: 20px;
  background-color: rgb(196 193 193);
  color: #232222;
  font-size: 16px;
  border: none;
  min-width: 100px;
}
.navbar-btn:hover {
  background-color: white;
  color: rgb(51, 54, 54);
  border: 1px solid rgb(51, 54, 54);
}
</style>