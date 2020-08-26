<template>
  <div class="success">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "SuccessMessage",
  props: {
    text: {
      type: String,
      default: "Congratulations"
    }
  }
};
</script>

<style lang="scss">
.success {
  color: green;
  font-size: 18px;
}
</style>
