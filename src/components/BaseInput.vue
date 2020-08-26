<template>
  <div class="default-input">
    <div v-if="title">
      {{ title }}
    </div>
    <input
      class="default-input__input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
    />
    <div class="default-input__error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      default: 0
    },
    placeholder: {
      type: String
    },
    error: {
      type: String
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss">
.default-input {
  &__input {
    padding: 10px 13px;
    border-radius: 5px;
    border: 1px solid lightgray;
    outline: none;
    margin: 10px 0 5px;
    font-size: 16px;
  }

  &__error {
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
  }
}
</style>
