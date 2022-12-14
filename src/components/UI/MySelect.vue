<template>
  <select :value="modelValue" @change="changeOptionValue" class="select">
    <option value="" disabled>Сортировать</option>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptionValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  height: 33px;
  padding: 8px 15px;
}
</style>