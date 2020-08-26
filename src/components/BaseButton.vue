<template functional>
  <button
    class="button"
    v-on="listeners"
    :class="{ 'button--disabled': props.disabled }"
  >
    <slot name="left" />
    <slot />
    <slot name="right" />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.button {
  background: darkorange;
  border-radius: 12px;
  border: 2px solid #000;
  padding: 10px 23px;
  font-size: 16px;
  font-family: system-ui, sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  margin: 0.25rem;
  cursor: pointer;
  outline: none;
  transition: opacity 0.2s ease;

  &--disabled {
    background: #999999;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
